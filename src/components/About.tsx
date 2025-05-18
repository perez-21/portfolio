
import { useEffect, useRef } from "react";

const About = () => {
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
    <section id="about" className="py-24 bg-accent">
      <div className="container mx-auto max-w-4xl px-4 md:px-8">
        <div ref={sectionRef} className="reveal">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-lg text-muted-foreground mb-4">
              I'm a backend-focused developer using JavaScript and Node.js to create secure, maintainable web systems. I have experience building REST APIs, integrating databases, and writing scalable logic, and I also understand enough frontend to bridge full-stack gaps.
            </p>
            
            <p className="text-lg text-muted-foreground">
              Currently exploring serverless architectures and GraphQL implementations to build more efficient backend solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
