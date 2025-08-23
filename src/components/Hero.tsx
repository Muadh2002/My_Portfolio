import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2 animate-slide-up">
          <h1 className="heading-xl text-gradient mb-6 animate-pulse-glow">
            Mohamed Muadh
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            Full-Stack Developer & AI Engineer
          </h2>
          
          <p className="text-body max-w-3xl mx-auto md:mx-0 mb-8 leading-relaxed">
            Self-driven software engineer with expertise in modern frameworks, AI-driven applications, 
            and IoT systems. I craft digital solutions that solve real-world problems and create 
            meaningful user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12">
            <Button 
              onClick={() => scrollToSection('projects')} 
              className="btn-hero group"
            >
              View My Work
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="btn-outline-hero"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center md:justify-start space-x-6">
            <a 
              href="https://github.com/Muadh2002" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohamed-muadh-a1373a276/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:mohamedmuaaz2002@gmail.com"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Outer glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse-slow"></div>
            
            {/* Image container with border gradient */}
            <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-primary to-secondary">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
                <img 
                  src="../../last.png"  // Replace with your image path
                  alt="Mohamed Muadh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-accent/30 rounded-full blur-md z-0"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/30 rounded-full blur-md z-0"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="h-6 w-6 text-muted-foreground cursor-pointer hover:text-primary transition-smooth"
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default Hero;