
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real app, you'd send the data to a backend API here
    alert("Message sent! (This is a simulation)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="mb-12">
          <span className="text-retro-cyan">05.</span> Contact
        </h2>
        
        <div className="retro-container">
          <div className="absolute top-0 right-0 px-3 py-1 font-mono text-xs border-l border-b rounded-bl text-muted-foreground border-border">
            contact.js
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl mb-3">Get In Touch</h3>
              <p className="text-muted-foreground">
                Whether you have a question or just want to say hi, Ping me and I'll get back to you!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10">
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-mono text-sm mb-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="retro-input"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-mono text-sm mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="retro-input"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-mono text-sm mb-1">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="retro-input resize-none"
                        placeholder="Hi Shiva, I'd like to talk about..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <button type="submit" className="retro-button w-full">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              
              <div className="border-t md:border-l md:border-t-0 border-border md:pl-10 pt-8 md:pt-0">
                <h4 className="font-mono text-lg mb-6">Elsewhere</h4>
                
                <div className="space-y-4">
                  <a 
                    href="https://github.com/shivaroopan" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Github className="h-5 w-5 group-hover:text-retro-green transition-colors" />
                    <span>GitHub</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/shiva-roopan-b8a94b145/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Linkedin className="h-5 w-5 group-hover:text-retro-green transition-colors" />
                    <span>LinkedIn</span>
                  </a>
                  
                  <a 
                    href="mailto:shivaruby46@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Mail className="h-5 w-5 group-hover:text-retro-green transition-colors" />
                    <span>shivaruby46@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
