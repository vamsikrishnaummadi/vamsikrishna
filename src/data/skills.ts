
export interface Skill {
  name: string;
  proficiency: number; // 0-100
  category: "frontend" | "backend" | "tools" | "other";
}

export const skills: Skill[] = [
  { name: "HTML5", proficiency: 90, category: "frontend" },
  { name: "CSS3", proficiency: 85, category: "frontend" },
  { name: "JavaScript", proficiency: 90, category: "frontend" },
  { name: "TypeScript", proficiency: 85, category: "frontend" },
  { name: "React", proficiency: 90, category: "frontend" },
  { name: "Next.js", proficiency: 80, category: "frontend" },
  { name: "Tailwind CSS", proficiency: 85, category: "frontend" },
  { name: "Node.js", proficiency: 75, category: "backend" },
  { name: "Express", proficiency: 75, category: "backend" },
  { name: "MongoDB", proficiency: 70, category: "backend" },
  { name: "PostgreSQL", proficiency: 65, category: "backend" },
  { name: "GraphQL", proficiency: 60, category: "backend" },
  { name: "Git", proficiency: 85, category: "tools" },
  { name: "Docker", proficiency: 65, category: "tools" },
  { name: "AWS", proficiency: 60, category: "tools" },
  { name: "Jest", proficiency: 70, category: "tools" },
  { name: "Figma", proficiency: 75, category: "tools" },
  { name: "UI/UX Design", proficiency: 70, category: "other" },
  { name: "Responsive Design", proficiency: 90, category: "other" },
  { name: "Performance Optimization", proficiency: 80, category: "other" },
];
