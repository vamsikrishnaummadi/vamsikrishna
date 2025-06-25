
import { useState, useEffect, useRef } from "react";
import { projects, Project } from "@/data/projects";
import { ExternalLink, Github, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl text-center">
            Explore my latest web development projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md project-card relative">
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent to-white dark:to-gray-800 z-10 reveal-animation"></div>
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-fit transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.liveUrl && (
            <Button size="sm" asChild variant="default">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-1 h-3 w-3" /> Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl !== "client" && project.githubUrl && (
            <Button size="sm" asChild variant="outline">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-1 h-3 w-3" /> Code
              </a>
            </Button>
          )}
          {project.githubUrl === "client" && (
            <Button size="sm" asChild variant="outline">
               <a href="#" target="_blank" rel="noopener noreferrer">Client: {project.client}</a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
