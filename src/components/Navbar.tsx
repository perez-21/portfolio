
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <a href="#" className="text-xl font-semibold text-foreground">
          <span className="text-primary">Dev</span>Portfolio
        </a>
        <nav className="hidden md:flex space-x-8">
          <a onClick={() => scrollToSection('about')} className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            About
          </a>
          <a onClick={() => scrollToSection('skills')} className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            Skills
          </a>
          <a onClick={() => scrollToSection('projects')} className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            Projects
          </a>
          <a onClick={() => scrollToSection('contact')} className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            Contact
          </a>
        </nav>
        <div className="md:hidden">
          <Button onClick={() => scrollToSection('contact')} variant="outline" size="sm">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
