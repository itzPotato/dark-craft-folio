const Skills = () => {
  const skills = {
    languages: "Python, SQL, C, HTML/CSS, Java (Currently Learning), JavaScript (Currently Learning)",
    packages: "Ragas, LangChain, python-dotenv, Pygame, Flask, Pandas, NumPy, Matplotlib, Seaborn, scikit-learn (Currently Learning), SciPy, Bootstrap, Node.js, Supabase, React.js, Tailwind CSS, Git",
    interests: "Machine Learning, Data Science, Data Analytics, Full-Stack Development, Large Language Models, Artificial Intelligence"
  };

  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-medium mb-8">skills & interests:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <div>
            <h3 className="text-base font-medium mb-3 text-muted-foreground">skills:</h3>
            <p className="text-foreground text-sm leading-relaxed">{skills.languages}</p>
          </div>

          <div>
            <h3 className="text-base font-medium mb-3 text-muted-foreground">packages:</h3>
            <p className="text-foreground text-sm leading-relaxed">{skills.packages}</p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-base font-medium mb-3 text-muted-foreground">interests:</h3>
            <p className="text-foreground text-sm leading-relaxed">{skills.interests}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
