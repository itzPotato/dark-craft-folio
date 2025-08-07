import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const highlights = [
    "5+ years experience",
    "50+ projects delivered", 
    "Remote-first mindset",
    "Open source contributor"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="gradient-card hover-lift shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I believe in the power of technology to solve real-world problems. With a strong foundation in both frontend and backend development, I create seamless user experiences backed by robust, scalable architectures.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or mentoring upcoming developers in the community.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="p-3 text-center justify-center hover-glow transition-smooth"
                >
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="gradient-card hover-lift shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Background</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground">Education</h4>
                    <p className="text-muted-foreground">B.S. Computer Science, Tech University</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Specialization</h4>
                    <p className="text-muted-foreground">Full-stack web development, UI/UX design, cloud architecture</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Current Focus</h4>
                    <p className="text-muted-foreground">React, Node.js, TypeScript, AWS, modern design systems</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card hover-lift shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Clean, maintainable code</li>
                  <li>• User-centered design thinking</li>
                  <li>• Continuous learning and growth</li>
                  <li>• Collaborative team culture</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;