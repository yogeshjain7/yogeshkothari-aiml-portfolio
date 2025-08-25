import { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const CertificationsSection = () => {
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

  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure Data Science Professional',
      issuer: 'Oracle',
      date: '2024',
      description: 'Comprehensive certification covering cloud-based data science tools, machine learning workflows, and big data analytics on Oracle Cloud Infrastructure.',
      skills: ['Cloud Computing', 'Data Science', 'Machine Learning', 'Big Data', 'Oracle Cloud'],
      verified: true,
      credentialId: 'OCI-DSP-2024-001'
    },
    {
      title: 'Python Programming Certification',
      issuer: 'Python Institute',
      date: '2023',
      description: 'Advanced Python programming certification covering object-oriented programming, data structures, algorithms, and best practices.',
      skills: ['Python', 'OOP', 'Data Structures', 'Algorithms', 'Testing'],
      verified: true,
      credentialId: 'PY-PROG-2023-456'
    }
  ];

  return (
    <section 
      id="certifications" 
      ref={sectionRef}
      className="py-20 bg-section-bg"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto fade-in-up ${isVisible ? 'animate' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional certifications in AI, ML, and Data Science
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={cert.title}
                className={`card-hover slide-in-right ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      {cert.verified && (
                        <div className="flex items-center gap-1 text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          <span className="text-xs font-medium">Verified</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl mb-2">{cert.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {cert.issuer}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2 text-sm">Skills Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </span>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Verify
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

export default CertificationsSection;
