import { useEffect, useRef, useState } from 'react';
import { Trophy, Code, Zap, Leaf, Medal, Star } from 'lucide-react';

const AchievementsSection = () => {
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

  const achievements = [
    {
      title: 'Hackathon Participant',
      description: 'Participated in multiple hackathons, developing innovative AI solutions under time constraints',
      icon: Code,
      category: 'Technology',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Sports Achievement',
      description: 'Represented college in inter-university sports competitions, demonstrating teamwork and leadership',
      icon: Medal,
      category: 'Sports',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Eco Club Member',
      description: 'Active member of environmental club, organizing awareness campaigns and sustainability initiatives',
      icon: Leaf,
      category: 'Environment',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50'
    },
    {
      title: 'Academic Excellence',
      description: 'Consistently maintained high academic performance throughout the degree program',
      icon: Star,
      category: 'Academic',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'Innovation Award',
      description: 'Recognized for innovative project ideas and implementation in AI/ML domain',
      icon: Zap,
      category: 'Innovation',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Leadership Excellence',
      description: 'Led technical teams and mentored junior students in programming and AI concepts',
      icon: Trophy,
      category: 'Leadership',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section 
      id="achievements" 
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto fade-in-up ${isVisible ? 'animate' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Achievements & Recognition
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Celebrating milestones in technology, sports, and leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`card-hover bg-card p-6 rounded-xl border border-border slide-in-left ${
                  isVisible ? 'animate' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${achievement.bgColor}`}>
                    <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {achievement.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {achievement.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;