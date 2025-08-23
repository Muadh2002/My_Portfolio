import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript/TypeScript", level: 90, color: "bg-yellow-500" },
        { name: "Python", level: 85, color: "bg-blue-500" },
        { name: "Java", level: 80, color: "bg-red-500" },
        { name: "C/C++", level: 75, color: "bg-purple-500" },
        { name: "SQL", level: 85, color: "bg-green-500" },
        { name: "C#", level: 70, color: "bg-indigo-500" }
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 95, color: "bg-cyan-500" },
        { name: "Next.js", level: 85, color: "bg-gray-500" },
        { name: "React Native", level: 80, color: "bg-blue-600" },
        { name: "Angular", level: 75, color: "bg-red-600" },
        { name: "HTML/CSS", level: 90, color: "bg-orange-500" },
        { name: "Tailwind CSS", level: 85, color: "bg-teal-500" }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 90, color: "bg-green-600" },
        { name: "Express.js", level: 85, color: "bg-gray-600" },
        { name: "Django", level: 80, color: "bg-green-700" },
        { name: "Flask", level: 85, color: "bg-blue-700" },
        { name: "MongoDB", level: 85, color: "bg-green-500" },
        { name: "PostgreSQL", level: 80, color: "bg-blue-500" }
      ]
    },
    {
      title: "AI/ML & Data Science",
      skills: [
        { name: "Scikit-learn", level: 80, color: "bg-orange-600" },
        { name: "Pandas", level: 85, color: "bg-purple-600" },
        { name: "NumPy", level: 80, color: "bg-blue-600" },
        { name: "NLTK", level: 75, color: "bg-yellow-600" },
        { name: "Machine Learning", level: 75, color: "bg-pink-600" },
        { name: "Data Analysis", level: 80, color: "bg-indigo-600" }
      ]
    }
  ];

  const tools = [
    "Git & GitHub", "Docker", "Postman", "VS Code", "Arduino IDE", 
    "Streamlit", "Expo", "Vercel", "Railway", "Slack", "Trello"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gradient mb-6">Technical Skills</h2>
          <p className="text-body max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across different domains. 
            I'm constantly learning and expanding my skill set to stay current with industry trends.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="card-glass p-8">
              <h3 className="heading-sm mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted group-hover:bg-muted/80 transition-colors"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <Card className="card-glass p-8">
          <h3 className="heading-sm mb-6 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 hover:scale-105 cursor-default"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Certifications Preview */}
        <div className="text-center mt-12">
          <h3 className="heading-sm mb-4">Certified & Continuous Learning</h3>
          <p className="text-muted-foreground mb-6">
            8+ professional certifications from Meta, Microsoft, LinkedIn, and CodeChef
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">Meta JavaScript Certification</Badge>
            <Badge variant="secondary">Microsoft Data Analysis</Badge>
            <Badge variant="secondary">Arduino Programming</Badge>
            <Badge variant="secondary">AI Fundamentals</Badge>
            <Badge variant="secondary">+ 4 More</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;