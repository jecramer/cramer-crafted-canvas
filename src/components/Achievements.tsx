
const achievements = [
  {
    title: 'Founding and leading Skunkworks',
    description: 'Established a company from scratch that grew to 34 people and raised €5.8m in funding.'
  },
  {
    title: 'Leading Merge Friends to €4.5m lifetime revenue',
    description: 'Developed a successful mobile game that generated substantial revenue and strong KPIs.'
  },
  {
    title: 'Developing a robust process for market validation',
    description: 'Created a systematic approach to researching and validating market opportunities in the gaming space.'
  },
  {
    title: 'Launching The Walking Dead: No Man\'s Land',
    description: 'Successfully launched one of the most popular licensed mobile games based on AMC\'s The Walking Dead.'
  },
  {
    title: 'Launching Goblin Quest after 10 weeks\' development',
    description: 'Rapidly developed and launched a game with promising early metrics in just 10 weeks.'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Key Achievements</h2>
          <div className="h-1 w-20 bg-amber mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">
            Highlights from my career in gaming and entrepreneurship
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="project-card flex flex-col">
              <div className="text-amber font-bold text-2xl mb-2">{index + 1}</div>
              <h3 className="text-xl font-medium mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="stat-card">
            <div className="text-4xl font-bold text-amber mb-2">10+</div>
            <div className="text-sm">Games Shipped</div>
          </div>
          <div className="stat-card">
            <div className="text-4xl font-bold text-amber mb-2">185k+</div>
            <div className="text-sm">Sessions on Merge Friends</div>
          </div>
          <div className="stat-card">
            <div className="text-4xl font-bold text-amber mb-2">67%</div>
            <div className="text-sm">D1 Retention</div>
          </div>
          <div className="stat-card">
            <div className="text-4xl font-bold text-amber mb-2">34</div>
            <div className="text-sm">Team Members Led</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
