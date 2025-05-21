// import profileImg from '../../public/assets/profile.jpeg';

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
                With 4+ years of experience in full-stack development, I specialize in building scalable web applications using the MERN stack and modern JavaScript frameworks.
              </p>
              
              <p className="leading-relaxed">
                My passion lies in building scalable SaaS applications and exploring AI implementations in web development. I thrive in collaborative environments where I can mentor junior developers while taking ownership of complex projects.
              </p>
              
              <p className="leading-relaxed">
                I'm driven by curiosity and continuously learning about emerging technologies and best practices in software engineering to deliver high-quality, maintainable code that solves real business problems.
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
