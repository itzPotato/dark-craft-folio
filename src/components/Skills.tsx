import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Palette, 
  Database, 
  Cloud, 
  Globe, 
  Smartphone,
  GitBranch,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 80 },
      ],
      technologies: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind", "SCSS", "Vue.js", "Nuxt.js"]
    },
    {
      title: "Backend Development", 
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "REST/GraphQL APIs", level: 90 },
      ],
      technologies: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="h-6 w-6" />,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Design Systems", level: 95 },
        { name: "User Research", level: 80 },
        { name: "Prototyping", level: 85 },
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer", "Design Systems", "Accessibility"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "Git", level: 95 },
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Terraform", "Vercel", "Netlify"]
    }
  ];

  const additionalSkills = [
    { icon: <Globe className="h-5 w-5" />, name: "Web Performance" },
    { icon: <Smartphone className="h-5 w-5" />, name: "Mobile Development" },
    { icon: <GitBranch className="h-5 w-5" />, name: "Version Control" },
    { icon: <Zap className="h-5 w-5" />, name: "Optimization" },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-primary bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="gradient-card hover-lift shadow-card transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="hover-glow transition-smooth text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="text-center text-primary">Additional Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {additionalSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover-lift transition-smooth">
                  <div className="text-primary">{skill.icon}</div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;