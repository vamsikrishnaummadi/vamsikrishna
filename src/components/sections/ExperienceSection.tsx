
import { experiences, certifications } from "@/data/experience";
import { Briefcase, Award } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl text-center">
            My professional journey and relevant certifications in the field of web development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="text-primary mr-3" size={28} />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>

            <div className="relative">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="mb-10 ml-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {index !== experiences.length - 1 && (
                    <div className="absolute h-full w-0.5 bg-gray-200 dark:bg-gray-700 left-0 top-5 -ml-0.5"></div>
                  )}
                  <div className="absolute w-4 h-4 bg-primary rounded-full left-0 top-5 -ml-2"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-medium text-primary mb-2">
                      {exp.company} | {exp.duration}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <Award className="text-primary mr-3" size={28} />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>

            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-sm font-medium text-primary mb-2">
                    {cert.issuer} | {cert.date}
                  </p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline inline-flex items-center mt-2"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
