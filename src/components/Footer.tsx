import { Mail, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Name and Title */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Radu George Besleaga</h3>
            <p className="text-primary-foreground/80">Professional Low-Code Developer & Solution Architect</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/radu-george-besleaga-7031a917b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105"
            >
              <Mail className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { label: 'About', id: 'about' },
              { label: 'Why Low-Code', id: 'low-code' },
              { label: 'Experience', id: 'experience' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-primary-foreground/20" />

          {/* Copyright and Back to Top */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 Radu George Besleaga. All rights reserved.</p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:text-primary-foreground transition-colors group"
            >
              <span>Back to top</span>
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;