
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
      <div className="mx-auto">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredSkills.map((skill) => (
            <SkillTag key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillTag = ({ skill }: { skill: Skill }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all hover:border-primary dark:hover:border-primary">
      <span className="font-medium">{skill.name}</span>
    </div>
  );
};
