export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="mb-12 inline-block">
          <span className="text-retro-cyan">01.</span> About Me
        </h2>
        
        <div className="retro-container">
          <div className="absolute top-0 right-0 px-3 py-1 font-mono text-xs border-l border-b rounded-bl text-muted-foreground border-border">
            about.js
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 md:gap-12">
            <div className="space-y-6">
              <p>
                <span className="text-retro-green font-mono">/**</span>
              </p>
              
              <p className="leading-relaxed">
                Full Stack Engineer with 4+ years of experience building scalable, high-performance backend systems and modern web applications. Deep expertise in Node.js, TypeScript, REST/GraphQL APIs, microservices architecture, and AWS cloud infrastructure.
              </p>

              <p className="leading-relaxed">
                Proven track record at Nike and Anko delivering production-grade distributed systems with strong reliability, observability, and engineering discipline — from EKS cluster migrations to event-driven Kafka pipelines and serverless AWS deployments.
              </p>

              <p className="leading-relaxed">
                Skilled in React for full-stack delivery, mentoring engineers, and translating complex product requirements into clean, maintainable solutions. Driven by curiosity and a commitment to engineering craft.
              </p>
              
              <p>
                <span className="text-retro-green font-mono">*/</span>
              </p>
              
              <div className="pt-4">
                <a href="/lovable-uploads/400835d8-e8cd-4a62-b71f-6fb7cf12f5ca.png" download="Shiva_Roopan_Resume.png" className="retro-button">
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square w-full max-w-[300px] mx-auto border-2 border-retro-green p-1 rounded pixel-corners">
                <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/profile.jpeg"
                    alt="Profile"
                    className="object-cover w-full h-full rounded"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-retro-purple rounded pixel-corners z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
