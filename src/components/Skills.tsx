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
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "C", level: 80 },
        { name: "JavaScript", level: 30 },
        { name: "SQL", level: 75 },
      ],
      technologies: ["Python", "Java", "JavaScript", "HTML/CSS", "SQL", "C"]
    },
    {
      title: "Frameworks & Libraries", 
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Pandas", level: 85 },
        { name: "Matplotlib", level: 70 },
        { name: "Flask", level: 90 },
        { name: "NumPy", level: 65 },
      ],
      technologies: ["React.js", "Pygame", "Flask", "Pandas", "NumPy", "Matplotlib", "Seaborn", "scikit-learn"]
    },
    {
      title: "Data Science & AI",
      icon: <Zap className="h-6 w-6" />,
      skills: [
        { name: "Machine Learning", level: 65 },
        { name: "Data Analysis", level: 95 },
        { name: "LLM Research", level: 85 },
        { name: "AI Research", level: 70 },
      ],
      technologies: ["Machine Learning", "Data Science", "NLP", "LLM", "AI Research", "Statistical Analysis"]
    },
    {
      title: "Tools & Platforms",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 80 },
        { name: "Supabase", level: 45 },
        { name: "Node.js", level: 60 },
        { name: "Tailwind CSS", level: 85 },
      ],
      technologies: ["Git", "Supabase", "Node.js", "Tailwind CSS", "Bootstrap", "WPILib", "Gemini AI"]
    }
  ];

  const additionalSkills = [
    { icon: <Globe className="h-5 w-5" />, name: "Research" },
    { icon: <Smartphone className="h-5 w-5" />, name: "Robotics" },
    { icon: <GitBranch className="h-5 w-5" />, name: "Version Control" },
    { icon: <Zap className="h-5 w-5" />, name: "Problem Solving" },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills and <span className="gradient-primary bg-clip-text text-transparent">Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="gradient-card card-glow-hover shadow-card transition-smooth">
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
                      <Badge key={idx} variant="outline" className="interactive-hover text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="gradient-card card-glow-hover shadow-card">
          <CardHeader>
            <CardTitle className="text-center text-primary">Additional Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {additionalSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 interactive-hover">
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