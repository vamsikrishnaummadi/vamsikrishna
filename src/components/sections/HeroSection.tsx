import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Profile from "../../assets/Profile.jpg";
import { TypeAnimation } from 'react-type-animation';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);
  return <section id="home" className="min-h-screen flex items-center py-12 md:py-16 lg:py-20 pt-28 md:pt-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-bl-full -z-10 dark:bg-primary/10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-tr-full -z-10 dark:bg-primary/10"></div>
      
      <div className="container mx-auto md:pr-6 px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6" data-aos="fade-right">
            <div>
              <h2 className="text-xl md:text-2xl font-medium text-primary mb-2">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Vamsi Krishna
              </h1>
              <h3 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                <TypeAnimation sequence={['Full Stack Web Developer', 2000, 'UI/UX Designer', 2000, 'React Specialist', 2000, 'JavaScript Engineer', 2000]} wrapper="span" speed={50} repeat={Infinity} className="gradient-text font-semibold" />
              </h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-lg">
              I build exceptional digital experiences with modern technologies.
              Focused on creating responsive, user-friendly web applications.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild data-aos="fade-up" data-aos-delay="200">
                <a href="#contact">Get in touch</a>
              </Button>
              <Button variant="outline" asChild data-aos="fade-up" data-aos-delay="300">
                <a href="#projects">View my work</a>
              </Button>
            </div>
            
            <div className="flex items-center space-x-5 pt-4" data-aos="fade-up" data-aos-delay="400">
              <a href="https://github.com/vamsikrishnaummadi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors" aria-label="GitHub profile">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/vamsikrishnaummadi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors" aria-label="LinkedIn profile">
                <Linkedin size={24} />
              </a>
              <a href="mailto:vamsikrishnaccbp@gmail.com" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors" aria-label="Email me">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="relative">
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl dark:border-gray-800 animate-floating">
                <img src={Profile} alt="Alex Morgan - Web Developer" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="text-primary" size={30} />
          </a>
        </div>
      </div>
    </section>;
};