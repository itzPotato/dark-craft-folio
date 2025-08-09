import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    name: "About",
    href: "#about"
  }, {
    name: "Experience",
    href: "#experience"
  }, {
    name: "Skills",
    href: "#skills"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  const technologies = ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL", "Tailwind CSS"];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <footer className="bg-secondary/20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <button onClick={scrollToTop} className="text-2xl font-bold text-foreground hover:opacity-80 transition-smooth">
              Rohan Babbellapati
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-Stack Developer & UI/UX Designer passionate about creating exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth hover-glow p-2">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/rohan-sashank-babbellapati-203660372/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth hover-glow p-2">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:alex@example.com" className="text-muted-foreground hover:text-primary transition-smooth hover-glow p-2">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link.name}>
                  <button onClick={() => scrollToSection(link.href)} className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                    {link.name}
                  </button>
                </li>)}
            </ul>
          </div>

          {/* Technologies */}
          

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Fremont, CA</p>
              <p>brsashank@gmail.com</p>
              <p>+1 8583314166</p>
            </div>
            <div className="mt-4">
              <Badge className="bg-mint-green/20 text-mint-green border-mint-green/30">
                Available for projects
              </Badge>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        
      </div>
    </footer>;
};
export default Footer;