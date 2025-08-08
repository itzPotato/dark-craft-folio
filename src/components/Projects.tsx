import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
const Projects = () => {
  const projects = [{
    title: "E-Commerce Platform",
    description: "A modern, full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard. Built with microservices architecture for scalability.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker"],
    features: ["Real-time inventory tracking", "Multi-vendor support", "Advanced analytics", "Mobile-responsive design"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "Full-Stack"
  }, {
    title: "Task Management SaaS",
    description: "A collaborative project management tool with real-time updates, team communication, and advanced reporting. Designed for remote teams and agile workflows.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket", "Tailwind"],
    features: ["Real-time collaboration", "Kanban & Gantt views", "Time tracking", "Team analytics"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    category: "SaaS"
  }, {
    title: "Design System Library",
    description: "A comprehensive design system and component library used across multiple products. Includes documentation, playground, and automated testing for consistency.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
    technologies: ["React", "Storybook", "TypeScript", "CSS-in-JS", "Testing Library"],
    features: ["50+ reusable components", "Dark/light themes", "Accessibility compliant", "Automated testing"],
    liveUrl: "https://storybook.example.com",
    githubUrl: "https://github.com/example",
    category: "Design System"
  }, {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for analyzing business metrics with real-time data updates, custom charts, and export capabilities. Built for enterprise clients.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
    features: ["Interactive charts", "Real-time data streaming", "Custom report generation", "Role-based access"],
    liveUrl: "https://dashboard.example.com",
    githubUrl: "https://github.com/example",
    category: "Data Visualization"
  }];
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development, AI research, and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group project-card opacity-0 translate-y-8 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <Card className="h-full hover-card transition-all duration-300 border-border/30 bg-card/50 backdrop-blur-sm">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary/80">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Features</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button variant="outline" size="sm" className="flex-1 border-primary/30 text-primary hover:bg-primary/10">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;