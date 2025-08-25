import { useEffect, useRef, useState } from 'react';
import profilePhoto from '../assets/yoyoyoyoyooo.jpg';

const AboutSection = () => {
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-section-bg"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center fade-in-up ${isVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate AIML Engineer with a deep fascination for artificial intelligence, 
                machine learning, and data science. My journey in technology is driven by the desire 
                to create intelligent solutions that can make a meaningful impact on the world.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With expertise in Python, machine learning algorithms, deep learning frameworks, 
                and data analysis, I specialize in building end-to-end AI solutions. From data 
                preprocessing to model deployment, I enjoy every aspect of the ML pipeline.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently, I'm focused on expanding my knowledge in computer vision, natural 
                language processing, and exploring the latest advancements in AI technology. 
                I believe in continuous learning and staying updated with the rapidly evolving 
                AI landscape.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-strong">
                  <img 
                    src={profilePhoto} 
                    alt="Yogesh Kothari"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
