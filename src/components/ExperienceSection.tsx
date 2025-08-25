import { useEffect, useRef, useState } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const ExperienceSection = () => {
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

  const experiences = [
    {
      role: 'AIML Intern',
      company: 'EZ Trainings and Technologies Pvt. Ltd.',
      duration: '2023 - 2024',
      location: 'Remote',
      description: 'Worked on machine learning projects focusing on data preprocessing, model development, and deployment. Gained hands-on experience with various ML algorithms and frameworks.',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'TensorFlow', 'Model Deployment'],
      achievements: [
        'Developed and deployed ML models for real-world applications',
        'Improved model accuracy by 15% through feature engineering',
        'Collaborated with cross-functional teams on AI solutions'
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto fade-in-up ${isVisible ? 'animate' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional journey in AI and Machine Learning
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-16 pb-12 slide-in-left ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md" />

                <div className="card-hover bg-card p-6 rounded-xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Briefcase className="h-4 w-4 mr-2 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground pl-4 relative">
                          <span className="absolute left-0 top-2 w-1 h-1 bg-primary rounded-full" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;