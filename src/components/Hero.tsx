
import { TypedText } from "./TypedText";
import { ArrowDown } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center grid-bg relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-0 animate-grid-fade"></div>
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4 opacity-90">
            <div className="font-mono text-sm text-retro-cyan mb-2">
              &lt;div className="greeting"&gt;
            </div>
            <h1 className="mb-2 font-mono tracking-tight">
              Hello, I'm <span className="text-retro-green">Shiva</span>
            </h1>
            <TypedText 
              text="Full Stack Engineer" 
              className="text-2xl md:text-3xl"
            />
            <div className="font-mono text-sm text-retro-cyan mt-2">
              &lt;/div&gt;
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground font-light max-w-2xl">
            Turning ideas into scalable web applications.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={800}
              className="retro-button"
            >
              View Projects
            </ScrollLink>
            
            <ScrollLink
              to="contact"
              smooth={true}
              duration={1000}
              className="retro-button"
            >
              Let's Connect
            </ScrollLink>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float">
        <ScrollLink to="about" smooth={true} duration={800} className="cursor-pointer">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </ScrollLink>
      </div>
    </section>
  );
};
