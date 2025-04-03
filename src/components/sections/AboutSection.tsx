
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl text-center">
            Here's a brief introduction about my background and passion for web development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">
              I'm Alex, a Full Stack Developer with passion for creating intuitive user experiences
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                With over 5 years of experience in web development, I specialize in building modern, responsive websites and web applications that deliver exceptional user experiences.
              </p>
              <p>
                My journey in web development began with a fascination for creating interactive interfaces. Since then, I've worked with various technologies and frameworks to deliver scalable and maintainable solutions for clients across different industries.
              </p>
              <p>
                I believe in writing clean, efficient code and staying up-to-date with the latest industry trends and best practices. My approach combines technical expertise with creative problem-solving to overcome challenges and deliver outstanding results.
              </p>
            </div>
            
            <div className="mt-8">
              <Button asChild className="shine-effect">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="glass-card rounded-2xl overflow-hidden p-2 shadow-xl rotate-3">
                <img
                  src="/placeholder.svg"
                  alt="About Alex Morgan"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center animate-fade-in">
            <h4 className="text-4xl font-bold text-primary mb-2">5+</h4>
            <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center animate-fade-in">
            <h4 className="text-4xl font-bold text-primary mb-2">50+</h4>
            <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center animate-fade-in">
            <h4 className="text-4xl font-bold text-primary mb-2">20+</h4>
            <p className="text-gray-600 dark:text-gray-300">Happy Clients</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center animate-fade-in">
            <h4 className="text-4xl font-bold text-primary mb-2">4</h4>
            <p className="text-gray-600 dark:text-gray-300">Certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
};
