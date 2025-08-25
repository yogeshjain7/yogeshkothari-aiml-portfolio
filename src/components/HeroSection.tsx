import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from './ui/button';
import heroBg from '../assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/80" />
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shape absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full" />
        <div className="floating-shape absolute top-32 right-20 w-8 h-8 bg-white/20 rounded-lg rotate-45" />
        <div className="floating-shape absolute bottom-32 left-1/4 w-12 h-12 bg-white/15 rounded-full" />
        <div className="floating-shape absolute bottom-20 right-1/3 w-6 h-6 bg-white/25 rounded-lg" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="fade-in-up animate">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Yogesh Kothari
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-4 text-blue-100">
            AIML Engineer
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Building intelligent solutions with AI, ML & Data Science
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's Connect
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;