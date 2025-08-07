import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "Remote",
      duration: "2022 - Present",
      description: "Led development of microservices architecture serving 100K+ users. Implemented modern React applications with TypeScript and deployed on AWS cloud infrastructure.",
      technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL", "Docker"],
      highlights: [
        "Reduced page load times by 40% through optimization",
        "Mentored 3 junior developers",
        "Architected scalable backend systems"
      ]
    },
    {
      title: "Frontend Developer",
      company: "DesignStudio Inc",
      location: "San Francisco, CA",
      duration: "2020 - 2022",
      description: "Developed responsive web applications and design systems for enterprise clients. Collaborated closely with UX designers to implement pixel-perfect interfaces.",
      technologies: ["React", "Vue.js", "SCSS", "Figma", "JavaScript", "REST APIs"],
      highlights: [
        "Built reusable component library used across 15+ projects",
        "Improved mobile user experience by 60%",
        "Led frontend architecture decisions"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      duration: "2019 - 2020",
      description: "Developed and maintained web applications in a fast-paced startup environment. Gained experience in full-stack development and agile methodologies.",
      technologies: ["JavaScript", "PHP", "MySQL", "HTML", "CSS", "jQuery"],
      highlights: [
        "Delivered 20+ features in first 6 months",
        "Improved application performance by 25%",
        "Participated in product planning and user research"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions across various industries and scales
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="gradient-card hover-lift shadow-card transition-smooth">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl lg:text-2xl text-primary mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                      <span className="font-medium text-foreground">{exp.company}</span>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="font-medium text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="hover-glow transition-smooth">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;