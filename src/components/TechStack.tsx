
export const TechStack = () => {
  const technologies = [
    { name: "MongoDB", category: "Database" },
    { name: "Express.js", category: "Backend" },
    { name: "React.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Kafka", category: "Messaging" },
    { name: "React Native", category: "Mobile" },
    { name: "GraphQL", category: "API" },
    { name: "Redis", category: "Cache" },
    { name: "Jest", category: "Testing" }
  ];

  return (
    <section id="tech" className="relative overflow-hidden bg-secondary/40">
      <div className="container mx-auto">
        <h2 className="mb-12">
          <span className="text-retro-cyan">02.</span> Tech Stack
        </h2>
        
        <div className="retro-container">
          <div className="absolute top-0 right-0 px-3 py-1 font-mono text-xs border-l border-b rounded-bl text-muted-foreground border-border">
            skills.json
          </div>
          
          <div className="font-mono text-sm mb-6 opacity-80">
            <div>{'{'}</div>
            <div className="ml-4">"skills": [</div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name} 
                className="retro-card p-4 relative hover:translate-y-[-2px] transition-transform"
              >
                <div className="font-mono text-xs text-muted-foreground mb-1">
                  {tech.category}
                </div>
                <div className="text-lg font-medium font-mono relative">
                  <span className="text-retro-green">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="font-mono text-sm mt-6 opacity-80">
            <div className="ml-4">]</div>
            <div>{'}'}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
