import { useEffect, useState } from "react";

const Hero = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
      }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl w-full">
        <div className="mb-12 text-muted-foreground space-y-1">
          <div className="flex items-center gap-2">
            <span>•</span>
            <span>{time}</span>
            <span>•</span>
            <span>Fremont, USA</span>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-normal mb-4">
              i'm rohan
            </h1>
            <p className="text-xl text-muted-foreground">
              rising sophomore, full-stack developer, and data science researcher
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-medium">some things i've done</h2>
            
            <div className="space-y-6 text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="mt-1">•</span>
                <p>
                  maintaining 4.0 gpa while gaining hands-on experience through multiple internships and research positions
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1">•</span>
                <p>
                  full-stack developer intern at <a href="https://vengo.ai" target="_blank" rel="noopener noreferrer" className="text-foreground text-link">vengo ai</a>, working directly with CEO on new platform development
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1">•</span>
                <p>
                  data science intern at <a href="https://www.ipmdinc.com/" target="_blank" rel="noopener noreferrer" className="text-foreground text-link">ipmd, inc.</a>, curating datasets for advanced emotional ai systems
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1">•</span>
                <p>
                  student researcher at <a href="https://asdrp.org" target="_blank" rel="noopener noreferrer" className="text-foreground text-link">aspiring scholars</a>, investigating hallucination patterns in llm pipelines
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1">•</span>
                <p>
                  1st place in cemc gauss mathematics contest, outstanding results in cambridge checkpoints, harvard cs50 completion with 100% score
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-8">
            <h3 className="text-lg font-medium">my story:</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                i'm a rising sophomore at american high school in fremont, ca, with a passion for technology and innovation. my experience spans full-stack development, data science, and ai research, where i focus on creating impactful solutions using cutting-edge technologies.
              </p>
              <p>
                from working on ai systems to developing web applications, i enjoy tackling complex challenges and contributing to meaningful projects. these days, i'm focused on full-stack development at vengo ai, data science at ipmd, and research in llm hallucination patterns at aspiring scholars. but i'm always on the lookout for the next challenge to tackle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
