const About = () => {
  return <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">About Me</h2>
          <div className="h-1 w-20 bg-amber mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">I have more than 12 years experience in the startups and the mobile game industry, having worked on popular titles such as Clash of Clans and The Walking Dead: No Man's Land, and founded three companies during that time.</p>
            <p className="text-lg">I started my career in gaming at Supercell in 2012 and advanced through the ranks at several gaming startups before founding my first game studio, Skunkworks, in 2019.</p>
            <p className="text-lg">Currently, I am working on a new company, Get Lost which is focused on a major growth opportunity in the book publishing space.</p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg">Having been in the front seat of multiple gaming startups, I have grown a wealth of knowledge and experience in leadership and strategy development. Coupled with a strength in execution, I have been able to successfully take numerous concepts from ideation and bring them to life.</p>
            <p className="text-lg">
              One of my core strengths is the ability to build strategies, assemble teams, 
              and lead them to build highly performing games.
            </p>
            <p className="text-lg">
              Underlying this is an obsession with research and data-driven product strategies. I excel at 
              identifying high-growth market opportunities and developing the strategies to capitalize 
              on them.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="stat-card">
            <h3 className="text-3xl font-bold text-amber">12+</h3>
            <p className="text-sm mt-1">Years Experience</p>
          </div>
          <div className="stat-card">
            <h3 className="text-3xl font-bold text-amber">10+</h3>
            <p className="text-sm mt-1">Games</p>
          </div>
          <div className="stat-card">
            <h3 className="text-3xl font-bold text-amber">3</h3>
            <p className="text-sm mt-1">Companies Founded</p>
          </div>
          <div className="stat-card">
            <h3 className="text-3xl font-bold text-amber">€5.8m</h3>
            <p className="text-sm mt-1">Investment Raised</p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;