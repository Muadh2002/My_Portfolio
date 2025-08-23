import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "mohamedmuaaz2002@gmail.com",
      href: "mailto:mohamedmuaaz2002@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+94 725597192",
      href: "tel:+94725597192"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Colombo, Sri Lanka",
      href: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Muadh2002",
      description: "Open source projects & contributions"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/mohamed-muadh-a1373a276/",
      description: "Professional network & experience"
    }
  ];

  const references = [
    {
      name: "Nimni Senarathna",
      position: "Software Engineer",
      company: "Bistec Global Services",
      email: "nimnisenarathne.se@gmail.com",
      phone: "+94 772013482"
    },
    {
      name: "Dr (Eng) MFM. Firdhous, PhD, CEng(IT)",
      position: "Senior Lecturer",
      company: "University of Moratuwa",
      email: "firdhous@uom.lk",
      phone: "+94 11 2650301"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background-secondary relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gradient mb-6">Let's Connect</h2>
          <p className="text-body max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, 
            or simply having a conversation about technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="card-glass p-8 h-full">
              <h3 className="heading-sm mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="text-primary group-hover:text-accent transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-lg font-semibold mb-4">Social Links</h4>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-card-hover transition-colors group"
                    >
                      <div className="text-primary group-hover:text-accent transition-colors">
                        {link.icon}
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {link.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Professional References */}
          <div className="lg:col-span-2">
            <Card className="card-glass p-8 h-full">
              <h3 className="heading-sm mb-6">Professional References</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {references.map((ref, index) => (
                  <Card key={index} className="border border-border p-6 hover:border-primary/50 transition-colors">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {ref.name}
                    </h4>
                    <p className="text-primary font-medium mb-1">{ref.position}</p>
                    <p className="text-muted-foreground mb-4">{ref.company}</p>
                    
                    <div className="space-y-2">
                      <a 
                        href={`mailto:${ref.email}`}
                        className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        <span>{ref.email}</span>
                      </a>
                      <a 
                        href={`tel:${ref.phone}`}
                        className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span>{ref.phone}</span>
                      </a>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-hero group">
                    <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Send Message
                  </Button>
                  <Button className="btn-outline-hero">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-muted-foreground">
            © 2025 Mohamed Muadh. Built with React, TypeScript & Tailwind CSS.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Badge variant="outline" className="cursor-default">Available for Work</Badge>
            <Badge variant="outline" className="cursor-default">Open to Collaboration</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;