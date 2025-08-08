import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";
const Experience = () => {
  const experiences = [{
    title: "Full Stack Developer Intern",
    company: "Vengo AI",
    location: "Remote",
    duration: "Jun. 2025 - Present",
    description: "Responsible for coding and maintaining the frontend and backend for an upcoming company project. Working closely with CEO Jason Sherman and a team of 5 other people to improve website people to improve website user-interface.",
    technologies: ["React", "Node.js", "JavaScript", "HTML", "CSS", "Git"],
    highlights: ["Collaborated with CEO and development team", "Improved website user interface", "Full-stack development responsibilities"]
  }, {
    title: "Data Science Intern",
    company: "IPMD, Inc.",
    location: "Remote",
    duration: "Jan. 2025 - Apr. 2025",
    description: "Curate and preprocess datasets to improve the performance of an advanced emotional AI system, ensuring data accuracy and optimizing training through emotional cue interpretation.",
    technologies: ["Python", "Data Science", "Machine Learning", "AI", "Data Processing"],
    highlights: ["Enhanced emotional AI system performance", "Optimized training through emotional cue interpretation", "Ensured data accuracy and preprocessing"]
  }, {
    title: "Student Researcher",
    company: "Aspiring Scholars Directed Research Program",
    location: "Remote",
    duration: "Dec. 2024 - Present",
    description: "Under Dr. Phil Mui, I research hallucination patterns in biology document summarization, comparing text-only LLM pipelines (e.g., Llamaizer, DocQA) to multimodal pipelines (e.g., LlaVA, Claude, ChatGPT).",
    technologies: ["Python", "LLM", "Machine Learning", "Research", "Data Analysis"],
    highlights: ["Compared experimental using biomedical research papers with embedded visual data", "Conducted evaluations using automated metrics and human/LLM judgment", "Produced visualizations in matplotlib/seaborn and co-authored research paper"]
  }, {
    title: "Student Intern",
    company: "Extern - Beats by Dre Data Analytics Internship",
    location: "Remote",
    duration: "Mar. 2025 - Present",
    description: "Developing segmented data analytics skills via researching Gen Z trends and preferences for audio devices, leveraging Python, data science libraries, and NLP tools like Gemini AI for sentiment analysis and consumer feedback visualization.",
    technologies: ["Python", "Data Analytics", "NLP", "Gemini AI", "Data Visualization"],
    highlights: ["Researched Gen Z trends for audio devices", "Implemented sentiment analysis and consumer feedback visualization", "Synthesized insights through automated reports for actionable business strategies"]
  }, {
    title: "Software Team Member",
    company: "First Robotics Competition Rotaries 9114",
    location: "Fremont, CA",
    duration: "May 2025 - Present",
    description: "Develop control algorithms using Java and the WPILib library to enable autonomous and driver-operated functions, including drivetrain, arm, intake, and ball planning systems.",
    technologies: ["Java", "WPILib", "Robotics", "Control Systems"],
    highlights: ["Implemented advanced systems like vision pipelines and decision-making logic", "Enhanced robot performance during competitions", "Collaborated on autonomous and manual control systems"]
  }];
  return <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional 
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions across various industries and scales
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => <Card key={index} className="gradient-card hover-lift shadow-card transition-smooth">
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
                    {exp.highlights.map((highlight, idx) => <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {highlight}
                      </li>)}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => <Badge key={idx} variant="secondary" className="hover-glow transition-smooth">
                        {tech}
                      </Badge>)}
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Experience;