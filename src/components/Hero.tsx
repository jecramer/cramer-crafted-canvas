
import { ArrowDown, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section className="min-h-screen flex items-center pt-16 relative bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container-custom relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              James <span className="text-amber">Cramer</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90">Product leader, growth strategist & repeat entrepreneur with over a decade of building.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-amber group" asChild>
                <a href="#contact">
                  Get in touch
                </a>
              </Button>
              <Button className="bg-white/10 text-white hover:bg-white/20 border border-white/20" asChild>
                <a href="#experience">
                  View my experience
                </a>
              </Button>
            </div>
            
            <div className="flex space-x-4 pt-2">
              <a href="https://www.linkedin.com/in/james-cramer/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#contact" className="text-white hover:text-amber transition-colors">
                <Button variant="ghost" className="p-0 h-auto text-white hover:text-amber hover:bg-transparent">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-end">
            <div className="flex flex-col gap-6 max-w-md">
              <div className="stat-card animate-fade-in bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <h3 className="text-3xl font-bold text-amber">12+</h3>
                <p className="text-sm mt-1">Years Experience</p>
              </div>
              <div className="stat-card animate-fade-in bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <h3 className="text-3xl font-bold text-amber">3</h3>
                <p className="text-sm mt-1">Companies Founded</p>
              </div>
              <div className="stat-card animate-fade-in bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <h3 className="text-3xl font-bold text-amber">€5.8m</h3>
                <p className="text-sm mt-1">Investment Raised</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/80 hover:text-white transition-colors">
            <ArrowDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;
