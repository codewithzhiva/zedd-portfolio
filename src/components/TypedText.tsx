
import { useEffect, useState } from "react";

interface TypedTextProps {
  text: string;
  className?: string;
}

export const TypedText = ({ text, className = "" }: TypedTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 80); // Typing speed

      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length) {
      setIsTyping(false);
    }
  }, [currentIndex, text, isTyping]);

  return (
    <div className={`font-mono inline-block ${className}`}>
      {displayedText}
      <span className="inline-block w-2 h-5 bg-retro-green animate-cursor-blink ml-0.5"></span>
    </div>
  );
};
