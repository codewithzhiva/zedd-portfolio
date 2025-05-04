
import { useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Shiva | Full Stack Engineer";
    
    // Set dark mode as the default
    const root = window.document.documentElement;
    if (!root.classList.contains("dark") && !root.classList.contains("light")) {
      root.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
        <Blog />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
