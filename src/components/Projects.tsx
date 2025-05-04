
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "LanceX",
      description: "A SaaS platform for freelancers to build and manage proposals, track projects, and generate invoices. Built with React, Node.js, MongoDB, and Stripe integration.",
      image: "",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Redux"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "AI Tools for Content Creators",
      description: "A suite of AI-powered tools for content creators including text summarization, hashtag generation, and image captioning using OpenAI API.",
      image: "",
      tags: ["Next.js", "OpenAI API", "Tailwind CSS", "Prisma", "PostgreSQL"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Real-time Chat Application",
      description: "A scalable real-time chat application with private messaging, group chats, and file sharing capabilities using WebSockets.",
      image: "",
      tags: ["Socket.io", "Express", "MongoDB", "React", "Redis"],
      links: {
        github: "#",
      }
    },
    {
      title: "E-commerce Microservices",
      description: "A fully featured e-commerce platform built with a microservices architecture, event-driven design with Kafka.",
      image: "",
      tags: ["Kafka", "Docker", "Kubernetes", "Node.js", "React", "MongoDB"],
      links: {
        github: "#",
      }
    }
  ];

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="mb-12">
          <span className="text-retro-cyan">03.</span> Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="retro-card overflow-visible group relative"
            >
              <div className="h-48 bg-gradient-to-br from-background via-secondary to-background/80 flex items-center justify-center border-b border-border">
                <div className="font-mono text-xl text-center px-4">
                  {'<'} {project.title} {'>'}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl mb-3 font-mono">
                  <span className="text-retro-green">{project.title}</span>
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs font-mono py-1 px-2 bg-secondary rounded-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
