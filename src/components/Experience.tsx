const Experience = () => {
  const experiences = [
    {
      title: "full stack developer intern",
      company: "vengo ai",
      companyUrl: "https://vengo.ai",
      location: "remote",
      duration: "jun. 2025 - present",
      status: "active",
      description: "working closely with the ceo to singlehandedly develop frontend and backend for a new platform under vengo ai. responsible for maintaining and improving website user interface and functionality.",
      highlights: [
        "collaborated directly with ceo jason sherman and development team of 5",
        "full-stack development using react, node.js, and modern web technologies",
        "improved website user interface and user experience"
      ]
    },
    {
      title: "data science intern",
      company: "ipmd, inc.",
      companyUrl: "https://www.ipmd.net",
      location: "remote",
      duration: "jan. 2025 - apr. 2025",
      status: "completed",
      description: "curated and preprocessed datasets to improve performance of an advanced emotional ai system, ensuring data accuracy and optimizing training through emotional cue interpretation.",
      highlights: [
        "enhanced emotional ai system performance through data preprocessing",
        "optimized training through emotional cue interpretation",
        "ensured data accuracy using python and data science libraries"
      ]
    },
    {
      title: "student researcher",
      company: "aspiring scholars directed research program",
      companyUrl: "https://aspiringscholars.com",
      location: "remote",
      duration: "dec. 2024 - present",
      status: "active",
      description: "under dr. phil mui, researching hallucination patterns in biology document summarization, comparing text-only llm pipelines (e.g., llamaizer, docqa) to multimodal pipelines (e.g., llava, claude, chatgpt).",
      highlights: [
        "compared experimental results using biomedical research papers with embedded visual data",
        "conducted evaluations using automated metrics and human/llm judgment",
        "produced visualizations in matplotlib/seaborn and co-authored research paper"
      ]
    },
    {
      title: "student intern",
      company: "extern - beats by dre data analytics",
      companyUrl: "https://www.extern.com",
      location: "remote",
      duration: "mar. 2025 - present",
      status: "active",
      description: "developing segmented data analytics skills via researching gen z trends and preferences for audio devices, leveraging python, data science libraries, and nlp tools like gemini ai for sentiment analysis.",
      highlights: [
        "researched gen z trends for audio devices using data analytics",
        "implemented sentiment analysis and consumer feedback visualization",
        "synthesized insights through automated reports for business strategies"
      ]
    },
    {
      title: "software team member",
      company: "frc rotaries 9114",
      companyUrl: "https://team9114.org",
      location: "fremont, ca",
      duration: "may 2025 - present",
      status: "active",
      description: "develop control algorithms using java and the wpilib library to enable autonomous and driver-operated functions, including drivetrain, arm, intake, and ball planning systems.",
      highlights: [
        "implemented advanced systems like vision pipelines and decision-making logic",
        "enhanced robot performance during competitions",
        "collaborated on autonomous and manual control systems"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-medium mb-8">some things i'm working on:</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="space-y-4">
              <div>
                <span className="text-foreground">• </span>
                <a 
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground text-link"
                >
                  {exp.title} at {exp.company}
                </a>
                <span className="text-muted-foreground"> ({exp.duration})</span>
                <span className="ml-2 text-xs text-muted-foreground">
                  [{exp.status}]
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed ml-4">
                {exp.description}
              </p>

              <ul className="ml-4 space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-muted-foreground text-sm">
                    → {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground italic">
            i make things; a lot of them
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
