const Awards = () => {
  const achievements = [
    {
      title: "1st place in cemc gauss mathematics contest",
      year: "2024",
      description: "achieved first place in the prestigious canadian mathematics competition"
    },
    {
      title: "outstanding results in cambridge checkpoints",
      year: "2023-2024",
      description: "demonstrated excellence in cambridge international examinations"
    },
    {
      title: "harvard cs50 computer science course completion",
      year: "2024",
      description: "completed harvard university's introduction to computer science course"
    },
    {
      title: "4.0 gpa student",
      year: "2024-present",
      description: "maintaining perfect academic record at american high school"
    }
  ];

  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-medium mb-8">achievements:</h2>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="space-y-2">
              <div>
                <span className="text-foreground">• </span>
                <span className="text-foreground">{achievement.title}</span>
              </div>
              <p className="text-muted-foreground text-sm ml-4">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
