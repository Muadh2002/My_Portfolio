import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Brain, Cpu, Globe } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Full-Stack Development",
      description: "MERN Stack, React Native, and modern web technologies"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI & Machine Learning",
      description: "NLP, Computer Vision, and intelligent applications"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "IoT & Embedded Systems",
      description: "Arduino, sensors, and hardware integration"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Modern Frameworks",
      description: "React, Next.js, Django, Flask, and more"
    }
  ];

  const currentLearning = [
    "Machine Learning at The ML Academy",
    "Advanced React Patterns",
    "Cloud Architecture (AWS/Azure)",
    "DevOps & CI/CD"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gradient mb-6">About Me</h2>
          <p className="text-body max-w-3xl mx-auto">
            I'm a passionate software engineer currently pursuing my BSc IT (Hons) at University of Moratuwa 
            with a GPA of 3.63. I thrive on building innovative solutions that bridge the gap between 
            cutting-edge technology and real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Highlights */}
          <div className="space-y-6">
            <h3 className="heading-md mb-8">What I Do</h3>
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="card-glass card-hover p-6 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-primary group-hover:text-accent transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right Column - Education & Learning */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-md mb-6">Education</h3>
              <Card className="card-glass p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      BSc IT (Hons) - University of Moratuwa
                    </h4>
                    <p className="text-muted-foreground">2022 - Present</p>
                    <Badge variant="secondary" className="mt-2">
                      GPA: 3.63 / 4.0
                    </Badge>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <h4 className="text-lg font-semibold text-foreground">
                      Foundation of Machine Learning
                    </h4>
                    <p className="text-muted-foreground">The ML Academy - 2025</p>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="heading-md mb-6">Currently Learning</h3>
              <Card className="card-glass p-6">
                <div className="space-y-3">
                  {currentLearning.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;