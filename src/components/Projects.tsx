
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveLink?: string;
  githubLink?: string;
  reversed?: boolean;
}

const Project = ({ title, description, image, tech, liveLink, githubLink, reversed = false }: ProjectProps) => {
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 bg-white rounded-lg shadow-sm overflow-hidden`}>
      <div className="md:w-1/2 h-64 md:h-auto bg-accent">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-1/2 p-6 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item) => (
            <span key={item} className="bg-secondary px-2 py-1 rounded text-xs font-medium">
              {item}
            </span>
          ))}
        </div>
        
        <div className="mt-auto flex gap-4">
          {githubLink && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={16} />
                GitHub
              </a>
            </Button>
          )}
          
          {liveLink && (
            <Button size="sm" asChild>
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink size={16} />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
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
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto max-w-10xl px-4 md:px-8">
        <div ref={sectionRef} className="reveal">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          
          <div className="flex flex-col gap-12">
            <Project
              title="Keeper - Password Manager"
              description="A secure and user-friendly password manager built with React and NestJs. Store, manage, and generate strong passwords for all your online accounts."
              image="img/keeper.png"
              tech={["Node.js", "Express", "NestJs", "Postgres"]}
              githubLink="https://github.com/perez-21/keeper-server"
              liveLink="https://keeper-password-mgr.vercel.app/"
            />
            
            {/* <Project
              title="E-commerce Backend"
              description="Complete backend system for e-commerce operations including inventory management, order processing, payment integration, and analytics. Includes comprehensive API documentation."
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              tech={["Node.js", "Express", "PostgreSQL", "Redis", "Stripe API"]}
              githubLink="#"
              reversed={true}
            /> */}
            
            <Project
              title="Artist Website"
              description="Scalable real-time messaging backend using websockets. Features include group chats, message persistence, read receipts, and user presence indicators. Handles high concurrency."
              image="img/nenadi.png"
              tech={["Node.js", "React"]}
              githubLink="#"
              liveLink="https://nenadii-web.vercel.app/"
              reversed={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
