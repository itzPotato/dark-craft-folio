const Experience = () => {
  const workExperience = [
    {
      title: "Full-Stack AI Developer Intern",
      company: "Vengo AI",
      companyUrl: "https://vengo.ai/",
      duration: "Jun 2025 - Present",
      status: "current",
      highlights: [
        "Built scalable backend systems with Node.js, Supabase, and SQL, cutting query load times by 25% and stabilizing high-traffic workflows for an upcoming company project.",
        "Designed and deployed responsive user interfaces with Tailwind CSS and Bootstrap, improving usability for client-facing tools."
      ]
    },
    {
      title: "Student Researcher",
      company: "Aspiring Scholars Directed Research Program",
      companyUrl: "https://asdrp.org",
      duration: "Dec 2024 - Present",
      status: "current",
      highlights: [
        "Investigating hallucination patterns in the MMLongBench dataset through document summarization by benchmarking LLM pipelines (Llamaparse, Docling) vs VLM pipelines (Gemini, Qwen, ChatGPT).",
        "Designed controlled experiments using biomedical papers with embedded tables/charts, evaluating hallucination frequency and type via automated and human/LLM metrics.",
        "Produced quantitative visualizations (Matplotlib/Seaborn), and performed statistical analyses on our data for upcoming conferences such as SCCUR 2025, and our manuscript."
      ]
    },
    {
      title: "Data Science Intern",
      company: "IPMD, Inc.",
      companyUrl: "https://www.ipmdinc.com/",
      duration: "Jan 2025 - Apr 2025",
      status: "completed",
      highlights: [
        "Curated and preprocessed datasets to improve the performance of an advanced emotional AI system, ensuring data accuracy and optimizing training inputs for better emotional cue interpretation.",
        "Implemented rigorous data quality checks and augmented datasets with synthetic samples, increasing training input diversity by 30%, which led to a 20% improvement in system responsiveness during real-time emotional analysis."
      ]
    }
  ];

  const projectExperience = [
    {
      title: "Co-Founder and President",
      company: "Bin to Better",
      companyUrl: null,
      duration: "Jan 2025 - Present",
      status: "current",
      highlights: [
        "Founded sustainability nonprofit repurposing 30,000+ tennis balls and partnering with 10+ schools, shelters, and assisted living centers.",
        "Secured 501(c)(3) fiscal sponsorship under Ecologists; lead 10+ officers in outreach, logistics, and program execution.",
        "Launched Tech to Treasure, a program engaging 300+ participants in hardware/electronics workshops on sustainability."
      ]
    },
    {
      title: "Beats by Dre Data Analysis",
      company: "Extern",
      companyUrl: "https://extern.com/",
      duration: "Mar 2025 - Jun 2025",
      status: "completed",
      highlights: [
        "Conducted comprehensive research on Gen Z preferences for audio devices, utilizing Python programming and data science libraries to analyze over 10,000 consumer reviews, leading to the identification of emerging trend patterns that increased insights accuracy by 35%.",
        "Applied NLP tools such as Gemini AI to perform sentiment analysis on user feedback, resulting in the creation of detailed visual dashboards that enhanced stakeholder understanding and informed product development strategies with a 20% reduction in decision-making time."
      ]
    },
    {
      title: "Amazon Operational Strategy & People Analytics",
      company: "Extern",
      companyUrl: "https://extern.com/",
      duration: "Jun 2025 - Aug 2025",
      status: "completed",
      highlights: [
        "Analyzed 5,000+ unstructured employee feedback records using NLP and qualitative coding to identify attrition risks and workforce inefficiencies.",
        "Presented a pilot-ready proposal to Amazon stakeholders with targeted recommendations, improving employee experience and operational efficiency."
      ]
    },
    {
      title: "Student Participant",
      company: "Harvard's CS50: Introduction to Computer Science",
      companyUrl: "https://cs50.harvard.edu/",
      duration: "Oct 2024 - Dec 2024",
      status: "completed",
      highlights: [
        "Completed Harvard's CS50 with 100% score across 10 problem sets and a final project, applying algorithms, data structures, AI, and cybersecurity concepts in C, Python, and SQL."
      ]
    }
  ];

  const leadershipExperience = [
    {
      title: "Instructor and Officer",
      company: "Data Science Club",
      companyUrl: null,
      duration: "Oct 2025 - Present",
      status: "current",
      highlights: [
        "Developed and taught a comprehensive machine learning and data science curriculum to over 300 high school students, focusing on fundamental algorithms and practical applications."
      ]
    },
    {
      title: "Treasurer and Executive",
      company: "Physics Club",
      companyUrl: null,
      duration: "May 2025 - Present",
      status: "current",
      highlights: [
        "Manage budget for a 150+ member STEM club; organized monthly workshops and STEM competitions."
      ]
    },
    {
      title: "Outreach Officer",
      company: "Engineering and Technology Club",
      companyUrl: null,
      duration: "Sep 2024 - Present",
      status: "current",
      highlights: [
        "Coordinated outreach to professors, securing guest speakers for 300+ members; edited and published technical talks on YouTube."
      ]
    }
  ];

  const renderExperienceSection = (title: string, experiences: typeof workExperience) => (
    <div className="mb-10">
      <h3 className="text-base font-medium mb-6 text-muted-foreground">{title}</h3>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="space-y-3">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-foreground">{exp.title}</span>
              <span className="text-muted-foreground">@</span>
              {exp.companyUrl ? (
                <a 
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors underline decoration-dotted"
                >
                  {exp.company}
                </a>
              ) : (
                <span className="text-foreground">{exp.company}</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              {exp.duration} • <span className={exp.status === "current" ? "text-primary" : ""}>{exp.status}</span>
            </p>
            <ul className="space-y-2 ml-4">
              {exp.highlights.map((highlight, hIndex) => (
                <li key={hIndex} className="text-muted-foreground text-sm">
                  <span className="text-foreground">• </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-medium mb-8">experience:</h2>

        {renderExperienceSection("work experience:", workExperience)}
        {renderExperienceSection("project experience:", projectExperience)}
        {renderExperienceSection("leadership experience:", leadershipExperience)}
      </div>
    </section>
  );
};

export default Experience;
