import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
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

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Ballari Institute of Technology and Management',
      year: '2022 - 2026',
      location: 'Ballari, Karnataka',
      description: 'Specialized in Machine Learning with focus on data structures, algorithms, and modern AI frameworks.',
      gpa: '7.95/10',
      highlights: [
        'Relevant Coursework: Machine Learning, Deep Learning, Data Structures & Algorithms',
        'Final Year Project: AI-based Recommendation System',
        'Active member of Computer Science Society'
      ]
    },
    {
      degree: 'Higher Secondary Education (Science)',
      institution: 'Basavarajeswari Public School and College',
      year: '2020 - 2022',
      location: 'Ballari, Karnataka',
      description: 'Completed higher secondary education with Mathematics, Physics, and Chemistry as major subjects.',
      gpa: '75%',
      highlights: [
        'Mathematics and Science stream'
      ]
    }
  ];

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-20 bg-section-bg"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto fade-in-up ${isVisible ? 'animate' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Education
            </h2>
            <p className="text-xl text-muted-foreground">
              Academic foundation in  AI/ML
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative pl-16 pb-12 slide-in-right ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-md" />

                <div className="card-hover bg-card p-6 rounded-xl">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-lg text-primary font-medium mb-2">{edu.institution}</p>
                      <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 mt-4 md:mt-0 md:ml-4">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{edu.year}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <GraduationCap className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">{edu.gpa}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 text-foreground">Highlights</h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground pl-4 relative">
                          <span className="absolute left-0 top-2 w-1 h-1 bg-accent rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
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

export default EducationSection;
