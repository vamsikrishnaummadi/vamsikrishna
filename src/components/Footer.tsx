
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold gradient-text">
              Portfolio
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Creating exceptional digital experiences with modern technologies
              and clean, efficient code.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full mb-4 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="text-primary" size={24} />
            </button>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Alex Morgan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
