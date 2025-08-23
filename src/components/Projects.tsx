import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Database, Smartphone, Bot, Cpu } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "RevX - Performance Management System",
      description: "Comprehensive web application for employee performance evaluation, goal tracking, and review cycles with role-based access control and analytics dashboards.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Vercel", "Railway"],
      icon: <Database className="h-6 w-6" />,
      github: "https://github.com/Muadh2002/Employee-Performance-Review-System",
      type: "Full-Stack Web App",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Automated Potato Grading Machine",
      description: "IoT system that automatically grades and sorts potatoes by size and weight using Arduino, sensors, and conveyor belts for agricultural processing efficiency.",
      tech: ["Arduino Uno", "C", "Ultrasonic Sensors", "Load Cells", "NEMA Motors", "Relays"],
      icon: <Cpu className="h-6 w-6" />,
      github: "https://github.com/Muadh2002/Automated-Potato-Grading-Machine",
      type: "IoT & Hardware",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Personal Finance Tracker",
      description: "Cross-platform mobile application for personal finance management with budget tracking, interactive charts, and real-time data synchronization.",
      tech: ["React Native", "Expo", "TypeScript", "Node.js", "MongoDB", "JWT"],
      icon: <Smartphone className="h-6 w-6" />,
      type: "Mobile App",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Fake News Detector",
      description: "AI-powered web application that analyzes text content using NLP techniques to determine reliability scores and provide insights on news authenticity.",
      tech: ["React", "Python", "Flask", "Scikit-learn", "NLTK", "Streamlit"],
      icon: <Bot className="h-6 w-6" />,
      github: "https://github.com/Muadh2002/fake-news-detector.git",
      type: "AI/ML Application",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background-secondary relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gradient mb-6">Featured Projects</h2>
          <p className="text-body max-w-3xl mx-auto">
            A showcase of my technical expertise across full-stack development, AI/ML, 
            IoT systems, and mobile applications. Each project demonstrates my ability 
            to solve real-world problems with innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-glass hover-lift group overflow-hidden relative"
            >
              {/* Project gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="p-8 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-primary group-hover:text-accent transition-colors">
                      {project.icon}
                    </div>
                    <Badge variant="outline" className="text-xs font-medium">
                      {project.type}
                    </Badge>
                  </div>
                  
                  <div className="flex space-x-2">
                    {project.github && (
                      <Button
                        size="sm"
                        variant="ghost"
                        asChild
                        className="hover:text-primary"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <h3 className="heading-sm mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            className="btn-outline-hero"
          >
            <a href="https://github.com/Muadh2002" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;