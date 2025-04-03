
export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    duration: "Jan 2023 - Present",
    description: "Leading the frontend development team in building responsive and accessible web applications. Implementing best practices for code quality and performance optimization.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Web Solutions LLC",
    duration: "Mar 2020 - Dec 2022",
    description: "Developed and maintained full-stack web applications for various clients. Collaborated with design teams to implement responsive interfaces and integrate backend services.",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "AWS"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Digital Creations",
    duration: "Jun 2018 - Feb 2020",
    description: "Created responsive web interfaces and implemented UI components for client projects. Worked within an agile team to deliver features on schedule.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "SASS"],
  },
  {
    id: 4,
    role: "Web Development Intern",
    company: "StartUp Innovations",
    duration: "Jan 2018 - May 2018",
    description: "Assisted in developing website features and fixing bugs. Gained experience in modern web development practices and collaborative workflows.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
];

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Advanced React and Redux",
    issuer: "Udemy",
    date: "2022",
    url: "#",
  },
  {
    id: 2,
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2021",
    url: "#",
  },
  {
    id: 3,
    name: "Full-Stack Web Development",
    issuer: "Coursera",
    date: "2020",
    url: "#",
  },
  {
    id: 4,
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2019",
    url: "#",
  },
];
