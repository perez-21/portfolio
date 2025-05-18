
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto max-w-3xl px-4 md:px-8">
        <div ref={sectionRef} className="reveal">
          <h2 className="text-3xl font-bold mb-2 text-center">Contact</h2>
          <p className="text-center text-muted-foreground mb-8">Let's talk about your project or team.</p>
          
          <div className="bg-accent rounded-lg p-8 mb-8">
            <a 
              href="mailto:your.email@example.com" 
              className="flex flex-col items-center justify-center text-center space-y-4"
            >
              <Button size="lg" className="gap-2 px-8">
                <Mail size={18} />
                your.email@example.com
              </Button>
              <p className="text-sm text-muted-foreground">Feel free to reach out for collaborations or just a chat!</p>
            </a>
          </div>
          
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
