import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{
    backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.85), rgba(34, 40, 49, 0.85)), url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/10 animate-glow-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 rounded-full bg-mint-green/10 animate-glow-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-sage-green/10 animate-glow-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block gradient-primary bg-clip-text text-transparent">Rohan =ashank Babelapati</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-Stack Developer & Data Science Researcher passionate about AI and innovative technology solutions
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="hover-lift gradient-primary font-semibold px-8 py-3" onClick={() => document.querySelector("#projects")?.scrollIntoView({
            behavior: "smooth"
          })}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="hover-glow border-primary/50 text-primary hover:bg-primary/10 px-8 py-3" onClick={() => document.querySelector("#contact")?.scrollIntoView({
            behavior: "smooth"
          })}>
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-12">
            <a href="https://github.com/itzPotato" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth hover-glow p-2">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/rohan-babbellapati" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth hover-glow p-2">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:brsashank@gmail.com" className="text-muted-foreground hover:text-primary transition-smooth hover-glow p-2">
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <button onClick={scrollToAbout} className="animate-bounce hover:animate-none transition-smooth hover:text-primary">
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>;
};
export default Hero;