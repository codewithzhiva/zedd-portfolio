
export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-mono text-sm">&lt;/&gt; with 💻 by Shiva</div>
          </div>
          
          <div className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} • Built with React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};
