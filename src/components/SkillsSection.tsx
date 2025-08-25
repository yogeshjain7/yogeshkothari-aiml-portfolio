import { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Brain, 
  Database, 
  BarChart3, 
  Cpu, 
  Globe, 
  Eye, 
  GitBranch 
} from 'lucide-react';

const SkillsSection = () => {
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

  const skills = [
    { name: 'Python', icon: Code, level: 90 },
    { name: 'Machine Learning', icon: Brain, level: 85 },
    { name: 'Deep Learning', icon: Cpu, level: 80 },
    { name: 'Data Science', icon: BarChart3, level: 88 },
    { name: 'DSA', icon: Database, level: 75 },
    { name: 'Flask', icon: Globe, level: 70 },
    { name: 'TensorFlow', icon: Brain, level: 82 },
    { name: 'OpenCV', icon: Eye, level: 78 },
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto fade-in-up ${isVisible ? 'animate' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proficient in modern AI/ML technologies and frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`skill-card p-6 rounded-xl text-center slide-in-left ${
                  isVisible ? 'animate' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <skill.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1 + 0.3}s`
                    }}
                  />
                </div>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;