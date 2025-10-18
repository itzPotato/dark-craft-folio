const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-medium mb-8">skills:</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-base font-medium mb-4 text-muted-foreground">languages:</h3>
            <div className="ml-4 space-y-2">
              <p className="text-foreground">Python</p>
              <p className="text-foreground">JavaScript</p>
              <p className="text-foreground">TypeScript</p>
              <p className="text-foreground">Java</p>
              <p className="text-foreground">SQL</p>
              <p className="text-foreground">HTML/CSS</p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4 text-muted-foreground">frameworks & libraries:</h3>
            <div className="ml-4 space-y-2">
              <p className="text-foreground">React</p>
              <p className="text-foreground">Node.js</p>
              <p className="text-foreground">Flask</p>
              <p className="text-foreground">PyTorch</p>
              <p className="text-foreground">TensorFlow</p>
              <p className="text-foreground">Pandas</p>
              <p className="text-foreground">NumPy</p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4 text-muted-foreground">tools & technologies:</h3>
            <div className="ml-4 space-y-2">
              <p className="text-foreground">Git</p>
              <p className="text-foreground">Docker</p>
              <p className="text-foreground">PostgreSQL</p>
              <p className="text-foreground">MongoDB</p>
              <p className="text-foreground">AWS</p>
              <p className="text-foreground">Machine Learning</p>
              <p className="text-foreground">Data Science</p>
              <p className="text-foreground">WPILib</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
