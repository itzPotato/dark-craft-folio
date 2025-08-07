import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard. Built with microservices architecture for scalability.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker"],
      features: [
        "Real-time inventory tracking",
        "Multi-vendor support", 
        "Advanced analytics",
        "Mobile-responsive design"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Full-Stack"
    },
    {
      title: "Task Management SaaS",
      description: "A collaborative project management tool with real-time updates, team communication, and advanced reporting. Designed for remote teams and agile workflows.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket", "Tailwind"],
      features: [
        "Real-time collaboration",
        "Kanban & Gantt views",
        "Time tracking",
        "Team analytics"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "SaaS"
    },
    {
      title: "Design System Library",
      description: "A comprehensive design system and component library used across multiple products. Includes documentation, playground, and automated testing for consistency.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
      technologies: ["React", "Storybook", "TypeScript", "CSS-in-JS", "Testing Library"],
      features: [
        "50+ reusable components",
        "Dark/light themes",
        "Accessibility compliant",
        "Automated testing"
      ],
      liveUrl: "https://storybook.example.com",
      githubUrl: "https://github.com/example",
      category: "Design System"
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for analyzing business metrics with real-time data updates, custom charts, and export capabilities. Built for enterprise clients.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
      features: [
        "Interactive charts",
        "Real-time data streaming",
        "Custom report generation",
        "Role-based access"
      ],
      liveUrl: "https://dashboard.example.com",
      githubUrl: "https://github.com/example",
      category: "Data Visualization"
    }
  ];

  const publications = [
    {
      title: "Modern React Performance Optimization",
      description: "A comprehensive guide to optimizing React applications for production, covering code splitting, lazy loading, and bundle analysis.",
      type: "Article",
      url: "https://medium.com/example",
      date: "2024"
    },
    {
      title: "Building Scalable Design Systems",
      description: "Best practices for creating and maintaining design systems that scale across multiple teams and products.",
      type: "Conference Talk",
      url: "https://youtube.com/example",
      date: "2023"
    },
    {
      title: "TypeScript in Large-Scale Applications",
      description: "Lessons learned from implementing TypeScript in enterprise applications with hundreds of developers.",
      type: "Workshop",
      url: "https://github.com/example",
      date: "2023"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and technical excellence
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card key={index} className="gradient-card hover-lift shadow-card overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs hover-glow transition-smooth">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <Button 
                    size="sm" 
                    className="hover-lift"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover-glow border-primary/50"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Publications Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            Publications & <span className="gradient-primary bg-clip-text text-transparent">Talks</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <Card key={index} className="gradient-card hover-lift shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className="hover-glow transition-smooth">
                      {pub.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{pub.date}</span>
                  </div>
                  
                  <h4 className="font-semibold text-foreground mb-3">{pub.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{pub.description}</p>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-0 h-auto hover:text-primary"
                    onClick={() => window.open(pub.url, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Publication
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;