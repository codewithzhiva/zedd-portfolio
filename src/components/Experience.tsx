
import { useState } from "react";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const experiences: Experience[] = [
    {
      company: "Anko",
      role: "Full Stack Engineer",
      period: "2022 - Present",
      description: [
        "Led the development of real-time notification system using WebSockets resulting in 30% improved user engagement",
        "Designed and implemented microservices architecture for scalable product catalog management system",
        "Optimized frontend performance improving load times by 40% through code splitting and lazy loading",
        "Mentored junior developers and conducted code reviews to maintain high quality standards"
      ]
    },
    {
      company: "Freelance",
      role: "Independent Developer",
      period: "2020 - 2022",
      description: [
        "Built custom e-commerce solutions for small businesses using MongoDB, Express, React and Node.js",
        "Developed a content management system with advanced editing capabilities for a digital publication",
        "Created a booking management system for a local tourism company including payment integration",
        "Provided technical consulting for startups on technology stack selection and architecture design"
      ]
    }
  ];

  return (
    <section id="experience" className="relative overflow-hidden bg-secondary/40">
      <div className="container mx-auto">
        <h2 className="mb-12">
          <span className="text-retro-cyan">04.</span> Experience
        </h2>
        
        <div className="retro-container">
          <div className="absolute top-0 right-0 px-3 py-1 font-mono text-xs border-l border-b rounded-bl text-muted-foreground border-border">
            career.js
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-40 flex md:flex-col overflow-x-auto md:overflow-visible scrollbar-none">
              {experiences.map((exp, index) => (
                <button 
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-left min-w-[120px] font-mono text-sm md:border-l-2 border-b-2 md:border-b-0 transition-colors ${
                    activeTab === index 
                      ? "md:border-l-retro-green border-b-retro-green text-retro-green" 
                      : "md:border-l-border border-b-border text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-mono mb-1">
                <span className="text-retro-purple">{experiences[activeTab].role}</span>
                {' @ '}
                <span className="text-retro-green">{experiences[activeTab].company}</span>
              </h3>
              
              <div className="font-mono text-muted-foreground text-sm mb-4">
                {experiences[activeTab].period}
              </div>
              
              <ul className="space-y-3">
                {experiences[activeTab].description.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm md:text-base">
                    <span className="text-retro-green font-mono mt-1">{'>'}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
