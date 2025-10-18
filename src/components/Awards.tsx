const Awards = () => {
  const achievements = [
    {
      title: "CEMC Gauss Contest - Outstanding Achievement",
      description: "Secured 1st place in school, scoring 142/150 (top ~2.5% internationally) in the CEMC Gauss Mathematics Contest."
    },
    {
      title: "Cambridge Lower Secondary Checkpoint - Statement of Outstanding Results",
      year: "Jul 2023 - Jun 2024",
      description: "Received a Statement of Outstanding Results for Cambridge Lower Secondary Checkpoint results. Scoring above 92% on all 3 tests (Math: 50/50; Science: 50/50; English: 46/50)."
    }
  ];

  return (
    <section id="awards" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-medium mb-8">awards:</h2>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-foreground">• </span>
                <span className="text-foreground">{achievement.title}</span>
                {achievement.year && (
                  <span className="text-muted-foreground text-sm">({achievement.year})</span>
                )}
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
