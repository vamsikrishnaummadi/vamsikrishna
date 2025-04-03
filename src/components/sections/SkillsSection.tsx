
import { useState } from "react";
import { skills, Skill } from "@/data/skills";

type Category = "all" | "frontend" | "backend" | "tools" | "other";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const categories: { value: Category; label: string }[] = [
    { value: "all", label: "All Skills" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "tools", label: "Tools" },
    { value: "other", label: "Other" },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl text-center">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.value
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md animate-fade-in">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold">{skill.name}</h3>
        <span className="text-sm font-medium text-primary">{skill.proficiency}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill bg-primary"
          style={{ width: `${skill.proficiency}%` }}
        ></div>
      </div>
    </div>
  );
};
