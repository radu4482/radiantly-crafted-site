import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Linkedin } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-subtle-gradient">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary to-primary-soft bg-clip-text text-transparent">
                  Radu George
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light mb-6">
                Professional Low-Code Developer & Solution Architect
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              I specialize in building scalable, efficient applications using modern low-code platforms like 
              <span className="font-medium text-foreground"> Weweb</span> and 
              <span className="font-medium text-foreground"> Xano</span>. 
              Delivering business solutions faster without compromising on quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-hero-gradient hover:opacity-90 text-primary-foreground font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('about')}
                className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 font-medium px-8 py-3 rounded-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://www.linkedin.com/in/radu-george-besleaga-7031a917b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="h-5 w-5 text-accent-vibrant" />
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="p-3 rounded-full bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-5 w-5 text-accent-vibrant" />
              </button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex-shrink-0 order-first lg:order-last">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-card-hover">
                <img
                  src={profilePhoto}
                  alt="Radu George Besleaga"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent-vibrant/20 rounded-full -z-10 blur-xl" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16">
          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;