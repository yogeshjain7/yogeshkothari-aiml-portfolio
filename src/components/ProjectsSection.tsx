import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Sparkles, Home, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Vogue Outfit Recommendation System',
      description: 'AI-powered fashion recommendation system that suggests outfits based on user preferences, weather, and occasion using computer vision and machine learning algorithms.',
      techStack: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'CNN'],
      icon: Sparkles,
      category: 'Computer Vision'
    },
    {
      title: 'House Price Prediction System',
      description: 'Machine learning model to predict house prices using regression algorithms, feature engineering, and data preprocessing techniques for real estate market analysis.',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      icon: Home,
      category: 'Machine Learning'
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-section-bg"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto fade-in-up ${isVisible ? 'animate' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing my work in AI, ML, and Data Science
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`card-hover slide-in-right ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <project.icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="text-sm bg-accent text-accent-foreground px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="default" size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
