
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
      title: "Orchestra API",
      description: "Open-source multi-agent orchestration API. Define agent graphs as JSON, run them, and stream events over SSE. MCP-friendly Bearer auth — drop-in usable from a Claude skill or MCP server. Zero cloud dependencies, runs on a laptop.",
      image: "",
      tags: ["TypeScript", "Fastify", "LangGraph.js", "Ollama", "BullMQ", "Redis", "SQLite"],
      links: {
        github: "https://github.com/codewithzhiva/orchestra-api",
      }
    },
    {
      title: "RAG Chat",
      description: "Chat with your documents using local AI — 100% open source, zero cost. Retrieval-augmented generation pipeline with sub-80ms retrieval latency. Supports PDF, TXT, and Markdown ingestion with SSE streaming responses.",
      image: "",
      tags: ["TypeScript", "React", "Hono", "Qdrant", "Ollama", "Docker"],
      links: {
        github: "https://github.com/codewithzhiva/rag-chat",
      }
    },
    {
      title: "Orchestra UI",
      description: "Visual drag-and-drop agent graph builder for Orchestra API. Design LLM, HTTP, and Code node workflows on a canvas, save them, and watch them execute with live SSE node status updates in real time.",
      image: "",
      tags: ["TypeScript", "React", "React Flow", "Tailwind CSS", "Vite"],
      links: {
        github: "https://github.com/codewithzhiva/orchestra-ui",
      }
    },
    {
      title: "LLM Evals",
      description: "LLM-as-judge evaluation service for local AI stacks. Automatically scores RAG traces on faithfulness, relevance, and groundedness. Pulls from LLM Observatory, stores scores in SQLite, and serves live HTML reports.",
      image: "",
      tags: ["TypeScript", "Fastify", "SQLite", "LLM-as-Judge", "RAG"],
      links: {
        github: "https://github.com/codewithzhiva/llm-evals",
      }
    },
    {
      title: "LLM Gateway",
      description: "Local LLM gateway — single OpenAI-compatible endpoint that routes, caches, rate-limits, and falls back across providers. Semantic cache via Qdrant cuts redundant LLM calls. Feeds telemetry into LLM Observatory.",
      image: "",
      tags: ["TypeScript", "Fastify", "Redis", "Qdrant", "SQLite", "NATS"],
      links: {
        github: "https://github.com/codewithzhiva/llm-gateway",
      }
    },
    {
      title: "LLM Observatory",
      description: "Self-hosted LLM observability platform — traces, spans, costs, and analytics with zero vendor lock-in. Ingest via NATS JetStream, store in OpenSearch, visualise in Grafana and a custom React dashboard with span waterfalls and latency heatmaps.",
      image: "",
      tags: ["TypeScript", "Fastify", "OpenSearch", "NATS", "Grafana", "React"],
      links: {
        github: "https://github.com/codewithzhiva/llm-observatory",
      }
    },
    {
      title: "Durable Workflows",
      description: "Durable workflow engine with DAG execution, retries with exponential backoff, idempotency keys, replay controls, and live SSE run events. Built to demonstrate senior-level distributed systems thinking without framework magic.",
      image: "",
      tags: ["Node.js", "JavaScript", "DAG", "SSE", "Distributed Systems"],
      links: {
        github: "https://github.com/codewithzhiva/durable-workflows",
      }
    },
    {
      title: "Orchestra MCP",
      description: "MCP server that exposes the entire local AI ecosystem as tools — plug self-hosted Orchestra, RAG Chat, LLM Gateway, and LLM Observatory directly into Claude Desktop or Cursor with a single config entry.",
      image: "",
      tags: ["TypeScript", "Node.js", "MCP", "Claude Desktop", "Cursor"],
      links: {
        github: "https://github.com/codewithzhiva/orchestra-mcp",
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
