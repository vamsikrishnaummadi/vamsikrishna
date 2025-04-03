import { useState, useEffect, useMemo } from "react";
import { skills, Skill } from "@/data/skills";
import AOS from "aos";
import "aos/dist/aos.css";

type Category = "all" | "frontend" | "backend" | "tools" | "other";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);

  // Memoize filtered skills to avoid unnecessary recalculations
  const filteredSkills = useMemo(() => {
    return activeCategory === "all" 
      ? skills 
      : skills.filter(skill => skill.category === activeCategory);
  }, [activeCategory]);

  const categories: { value: Category; label: string }[] = [
    { value: "all", label: "All Skills" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "tools", label: "Tools" },
    { value: "other", label: "Other" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });

    // Reset animated skills when category changes
    setAnimatedSkills([]);

    // Animate skills with a staggered effect
    let index = 0;
    const timer = setInterval(() => {
      if (index < filteredSkills.length) {
        const skill = filteredSkills[index];
        if (skill?.name) { // ✅ Check if skill is defined before accessing `.name`
          setAnimatedSkills(prev => [...prev, skill.name]);
        }
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer); // ✅ Clear interval on unmount or category change
  }, [activeCategory, filteredSkills]);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

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

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                activeCategory === category.value
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filteredSkills.map((skill) => (
            <SkillTag 
              key={skill.name} 
              skill={skill} 
              isAnimated={animatedSkills.includes(skill.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillTag = ({ skill, isAnimated }: { skill: Skill; isAnimated: boolean }) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-lg p-3 text-center border border-gray-200 dark:border-gray-700 
        transition-all duration-500 relative overflow-hidden ${
          isAnimated 
            ? "opacity-100 scale-100 shadow-md border-primary dark:border-primary" 
            : "opacity-0 scale-90"
        }`}
      style={{
        transform: isAnimated ? "translateY(0) rotate(0deg)" : "translateY(20px) rotate(-3deg)"
      }}
    > 
      {/* Animated glow effect */}
      {isAnimated && (
        <div className="absolute inset-0 shine-effect"></div>
      )}
      
      <span className="font-medium">{skill.name}</span>
    </div>
  );
};
