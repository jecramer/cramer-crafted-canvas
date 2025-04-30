
const projects = [
  {
    title: 'Voxelpop',
    description: 'Voxelpop was a mobile game studio focused on strategy games for female players. We developed Goblin Quest, a highly approachable strategy game that was tested in the UK & US on Android devices.',
    image: '/goblin village.png',
    highlights: [
      'Raised angel investment from notable game investors',
      'Assembled a founding team with 60+ years combined experience',
      'Developed MVP with positive early metrics',
      'Focused on underserved female player segment'
    ]
  },
  {
    title: 'Dream Space',
    description: 'An upcoming home design game that incorporates real life designer furniture into a seamless and highly approachable 3D design game. Built the concept and team from scratch.',
    image: '/Screenshot 2025-04-30 at 19.23.45.png',
    highlights: [
      'Assembled senior dev team within weeks',
      'Designed the prototype',
      'Created product vision & roadmap',
      'Ran production and defined functional requirements',
      'Built fundraising strategy'
    ]
  },
  {
    title: 'Skunkworks',
    description: 'Founded in 2019, Skunkworks focused on merge games for the casual market. Our hit game Merge Friends generated more than €4.5m in lifetime revenue.',
    image: '/Screenshot 2025-04-30 at 19.23.45.png',
    highlights: [
      'Raised €5.8m in VC and government funding',
      'Grew team to 34 people',
      'Developed Merge Friends with 67.2% D1 retention',
      'Created company strategy focused on market research',
      'Developed rapid prototyping process'
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-amber mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">
            A showcase of my major ventures and projects
          </p>
        </div>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-lg">{project.description}</p>
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-amber mr-2">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
