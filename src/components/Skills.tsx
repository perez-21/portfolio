
import { useEffect, useRef } from "react";
import { 
  Server, 
  Code, 
  Database, 
  Terminal,
  GitBranch
} from "lucide-react";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCategory = ({ title, icon, skills }: SkillCategoryProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-primary">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="bg-accent px-3 py-1 rounded-full text-sm font-medium text-black"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
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
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto max-w-4xl px-4 md:px-8">
        <div ref={sectionRef} className="reveal">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCategory
              title="Backend"
              icon={<Server size={24} />}
              skills={["Node.js", "Express", "REST APIs", "JWT", "Authentication", "PostgreSQL", "MongoDB"]}
            />
            
            <SkillCategory
              title="Frontend"
              icon={<Code size={24} />}
              skills={["HTML", "CSS", "JavaScript", "React (Basic)", "Responsive Design"]}
            />
            
            <SkillCategory
              title="Database"
              icon={<Database size={24} />}
              skills={["PostgreSQL", "MongoDB", "Redis", "SQL", "NoSQL", "Database Design"]}
            />
            
            <SkillCategory
              title="Tools & DevOps"
              icon={<Terminal size={24} />}
              skills={["Git", "Postman"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
