
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const projects = [
  {
    title: 'Voxelpop',
    description: 'Voxelpop was a mobile game studio focused on strategy games for female players. We developed Goblin Quest, a highly approachable strategy game that was tested in the UK & US on Android devices.',
    image: '/voxelpop.png',
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
    image: '/DreamSpace.png',
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
    image: '/Skunkworks.png',
    highlights: [
      'Raised €5.8m in VC and government funding',
      'Grew team to 34 people',
      'Developed Merge Friends with 67.2% D1 retention',
      'Created company strategy focused on market research',
      'Developed rapid prototyping process'
    ]
  },
  {
    title: 'Get Lost',
    description: 'Get Lost is about creating a space where books and the people who love them take centre stage. A place where creators, readers, and communities can connect over stories and move away from the algorithms that dictate so much of our time online.',
    image: '/GetLost.png',
    highlights: [
      'Assembled world class development team',
      'Designed the prototype',
      'Created company strategy and vision',
      'Working on a fundraise'
    ]
  }
];

const Projects = () => {
  const [loadedImages, setLoadedImages] = useState({});
  const [erroredImages, setErroredImages] = useState({});

  useEffect(() => {
    projects.forEach((project, index) => {
      const img = new Image();
      img.src = project.image;

      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [index]: true }));
      };

      img.onerror = () => {
        setErroredImages(prev => ({ ...prev, [index]: true }));
        setLoadedImages(prev => ({ ...prev, [index]: true }));
        toast({
          title: "Image failed to load",
          description: `Using placeholder for ${project.title} project`,
          variant: "destructive",
        });
      };
    });
  }, []);

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

        {Object.keys(erroredImages).length > 0 && (
          <Alert variant="destructive" className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Image Loading Issue</AlertTitle>
            <AlertDescription>
              Some project images couldn't be loaded. Placeholder images are being displayed instead.
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <Card className="overflow-hidden rounded-xl shadow-md">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    {!loadedImages[index] && <Skeleton className="w-full h-full absolute" />}
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                    />
                  </AspectRatio>
                </Card>
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
