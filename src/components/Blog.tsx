
export const Blog = () => {
  const blogPosts = [
    {
      title: "Building a Scalable SaaS Application with MERN Stack",
      excerpt: "Learn how to architect a scalable SaaS application using MongoDB, Express.js, React and Node.js.",
      date: "March 15, 2025",
      readTime: "8 min read"
    },
    {
      title: "Implementing Event-Driven Architecture in Node.js",
      excerpt: "Using Kafka and Node.js to build robust event-driven systems for high throughput applications.",
      date: "February 28, 2025", 
      readTime: "10 min read"
    },
    {
      title: "Containerizing Your JavaScript Applications",
      excerpt: "A step-by-step guide to containerizing your full-stack JavaScript applications with Docker.",
      date: "January 20, 2025",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blog" className="relative overflow-hidden bg-secondary/40">
      <div className="container mx-auto">
        <h2 className="mb-12">
          <span className="text-retro-cyan">06.</span> Blog
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <a 
              key={post.title}
              href="#" 
              className="retro-card flex flex-col h-full hover:-translate-y-1 transition-transform"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="font-mono text-xs text-muted-foreground mb-2 flex justify-between">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-mono mb-3 text-retro-green">
                  {post.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="font-mono text-xs mt-2">
                  Read more <span className="text-retro-cyan">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="retro-button">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};
