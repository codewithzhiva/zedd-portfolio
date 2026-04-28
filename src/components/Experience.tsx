
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
      company: "Nike",
      role: "Software Engineer",
      period: "Jul 2025 – Present",
      description: [
        "Led NGINX-to-ALB migration and EKS cluster upgrades, improving traffic routing reliability and reducing infrastructure operational overhead.",
        "Implemented Aurora Serverless RDS and NodeGroup optimizations, improving database scalability and reducing compute costs for variable workloads.",
        "Migrated OpenSearch to serverless architecture, eliminating cluster management overhead and improving search service resilience.",
        "Designed and implemented a NestJS Quote Management backend with costsheet POST/PATCH APIs, schema versioning, and end-to-end Jenkins CI/CD pipelines.",
        "Integrated automated vulnerability scanning tooling across services; identified and resolved high-risk security issues, strengthening overall platform security posture.",
        "Set up Terraform + Jenkins + ASL infrastructure-as-code pipelines, enabling repeatable, auditable cloud deployments and reducing manual provisioning toil."
      ]
    },
    {
      company: "Anko (SDE-II)",
      role: "Software Engineer (SDE-II)",
      period: "Oct 2023 – Jun 2025",
      description: [
        "Architected and maintained Node.js microservices powering core business workflows, improving scalability and reducing service coupling.",
        "Developed real-time React web applications using WebSockets and RTK Query, improving user experience across internal tools.",
        "Integrated Microsoft Graph APIs to connect Microsoft 365 services into the application ecosystem.",
        "Leveraged AWS services (Lambda, S3, EC2, SQS, SSM, Secrets Manager, ECS, Serverless) for cloud-native deployments and secure configuration management.",
        "Processed high-volume event streams using Kafka, enabling reliable async communication between microservices."
      ]
    },
    {
      company: "Anko (ASE)",
      role: "Associate Software Engineer",
      period: "Oct 2021 – Oct 2023",
      description: [
        "Built RESTful APIs for microservice architecture using Node.js, enabling modular and independently deployable services.",
        "Developed responsive UI components using React.js aligned to product specifications.",
        "Managed and evolved MongoDB/DocumentDB schemas to support evolving business requirements while maintaining data integrity."
      ]
    },
    {
      company: "Verticurl",
      role: "Associate Marketing Engineer",
      period: "Dec 2020 – Sep 2021",
      description: [
        "Developed and executed digital marketing campaigns for multinational corporations, managing end-to-end workflow automation."
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
