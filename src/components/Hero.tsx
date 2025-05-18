
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-20 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Backend Developer.
            <br />
            <span className="text-primary">JavaScript Specialist.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            I build scalable server-side systems, APIs, and databases — with a working knowledge of modern frontend tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button size="lg" onClick={scrollToContact}>
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
        <ArrowDown 
          size={24}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-primary"
        />
      </div>
    </section>
  );
};

export default Hero;
