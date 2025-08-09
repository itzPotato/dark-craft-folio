import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const About = () => {
  const highlights = ["4.0 GPA Student", "Multiple Internships", "Research Experience", "Leadership Roles"];
  return <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="gradient-card card-glow-hover shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a rising sophomore at American High School in Fremont, CA, with a passion for technology and innovation. My experience spans full-stack development, data science, and research, where I focus on creating impactful solutions using cutting-edge technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From working on AI systems to developing web applications, I enjoy tackling complex challenges and contributing to meaningful projects that drive technological advancement.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => <Badge key={index} variant="secondary" className="p-3 text-center justify-center interactive-hover">
                  {highlight}
                </Badge>)}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
                <img src="/lovable-uploads/043c0fd9-2f34-4af9-82d1-18ee71c0bcee.png" alt="Rohan Sashank Babbellapati" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <Card className="gradient-card card-glow-hover shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Background</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground">Education</h4>
                    <p className="text-muted-foreground">American High School, Fremont, CA • Rising Sophomore • 4.0 GPA</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Specialization</h4>
                    <p className="text-muted-foreground">Full-stack development, Data Science, AI/ML Research</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Current Focus</h4>
                    <p className="text-muted-foreground">React, Python, Java, SQL, Machine Learning, Research</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card card-glow-hover shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Achievements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 1st place in CEMC Gauss Mathematics Contest</li>
                  <li>• Outstanding Results in Cambridge Checkpoints</li>
                  <li>• Harvard CS50 Computer Science course completion</li>
                  <li>• Multiple research and internship experiences</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default About;