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
  const publications = [{
    title: "Modern React Performance Optimization",
    description: "A comprehensive guide to optimizing React applications for production, covering code splitting, lazy loading, and bundle analysis.",
    type: "Article",
    url: "https://medium.com/example",
    date: "2024"
  }, {
    title: "Building Scalable Design Systems",
    description: "Best practices for creating and maintaining design systems that scale across multiple teams and products.",
    type: "Conference Talk",
    url: "https://youtube.com/example",
    date: "2023"
  }, {
    title: "TypeScript in Large-Scale Applications",
    description: "Lessons learned from implementing TypeScript in enterprise applications with hundreds of developers.",
    type: "Workshop",
    url: "https://github.com/example",
    date: "2023"
  }];
  return;
};
export default Projects;