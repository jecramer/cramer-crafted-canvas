
import { ArrowRight } from 'lucide-react';
const experiences = [{
  company: 'Get Lost',
  role: 'Founder & CEO',
  period: 'August 2024 - Present',
  description: 'Get Lost is about creating a space where books and the people who love them take centre stage. A place where creators, readers, and communities can connect over stories and move away from the algorithms that dictate so much of our time online.'
}, {
  company: 'Voxelpop',
  role: 'Founder & CEO',
  period: 'Dec 2022 - Dec 2024',
  description: 'Founded Voxelpop based on extensive market research that revealed an underserved market segment of female players in the mobile strategy game segment. Raised angel investment from notable game investors and Business Finland.'
}, {
  company: 'Dream Space',
  role: 'Product Lead',
  period: 'Nov 2022 - May 2023',
  description: 'Led product development for an upcoming home design game that incorporates real life designer furniture into a seamless 3D design experience. Assembled senior team, designed prototype, and created product vision & roadmap.'
}, {
  company: 'Skunkworks',
  role: 'Founder & CEO',
  period: 'Dec 2019 - Oct 2022',
  description: 'Founded and led Skunkworks, raising €5.8m in VC and government funding. Grew company to 34 people and developed hit game Merge Friends generating €4.5m lifetime revenue.'
}, {
  company: 'Consulting',
  role: 'Mobile Game Consultant',
  period: 'Jul 2016 - Present',
  description: 'Provided strategic consulting for various mobile game projects including Top Gear mobile game, Rocket League mobile game, and various hyper casual publishers.'
}, {
  company: 'Armada Interactive',
  role: 'Product Lead',
  period: 'Aug 2016 - Jan 2018',
  description: 'Led product development for a competitive mobile game with focus on PVP gameplay and monetization.'
}, {
  company: 'Next Games',
  role: 'Product Lead',
  period: 'Sep 2014 - Aug 2016',
  description: 'Launched The Walking Dead: No Man\'s Land, which became one of the most successful licensed mobile games.'
}, {
  company: 'Grand Cru Games',
  role: 'Product Manager',
  period: 'Sep 2013 - Sep 2014',
  description: 'Managed product development for mobile games with focus on retention and monetization.'
}, {
  company: 'Supercell',
  role: 'Community Manager',
  period: 'Jan 2013 - Sep 2013',
  description: 'Started career in gaming at Supercell, working on community management for Clash of Clans during its early growth phase.'
}];
const Experience = () => {
  return <section id="experience" className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-amber mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">More than a decade in startups and mobile free to play</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => <div key={index} className="timeline-item">
              <div className="mb-1 flex items-center">
                <h3 className="text-xl font-medium">{exp.company}</h3>
                <ArrowRight className="h-4 w-4 mx-2 text-muted-foreground" />
                <span className="text-muted-foreground">{exp.role}</span>
              </div>
              <div className="text-sm text-muted-foreground mb-2">{exp.period}</div>
              <p>{exp.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Experience;
