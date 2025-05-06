
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

interface NavItem {
  label: string;
  target: string;
}

const navItems: NavItem[] = [
  { label: "About", target: "about" },
  { label: "Tech", target: "tech" },
  { label: "Projects", target: "projects" },
  { label: "Experience", target: "experience" },
  { label: "Contact", target: "contact" },
  { label: "Blog", target: "blog" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="font-mono text-lg font-semibold cursor-pointer flex items-center"
        >
          <span className="text-retro-green mr-1">&gt;</span> Zhiva
        </ScrollLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <ScrollLink
              key={item.target}
              to={item.target}
              smooth={true}
              duration={500}
              className="font-mono text-sm hover:text-retro-cyan transition-colors cursor-pointer"
            >
              {item.label}
            </ScrollLink>
          ))}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-md animate-slide-up">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <ScrollLink
                key={item.target}
                to={item.target}
                smooth={true}
                duration={500}
                className="font-mono text-sm py-2 hover:text-retro-cyan transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
