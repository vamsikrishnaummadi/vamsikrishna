
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
    role: "Software Engineer",
    company: "itd Applications private Ltd",
    duration: "Jan 2023 - Present",
    description: "Developed and maintained full-stack web applications for various clients. Implementing best practices for code quality and performance optimization.",
    technologies: ["JavaaScript", "React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    id: 2,
    role: "MERN Stack Apprenticeship",
    company: "NxtWave Technologies",
    duration: "8 months",
    description: "Completed an intensive MERN stack apprenticeship, mastering React, Node.js, Express, and MongoDB while building real-world projects.",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS"],
  },
  {
    id: 3,
    role: "DSA and System Design",
    company: "HeyCoach",
    duration: "6 months",
    description: "Learning advanced Data Structures & Algorithms and System Design concepts to strengthen problem-solving skills and prepare for high-level technical interviews.",
    technologies: ["Algorithms", "Data Structures", "System Design", "Problem Solving"],
  }
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
    name: "DSA & System Design",
    issuer: "HeyCoach",
    date: "2025",
    url: "https://www.linkedin.com/in/vamsikrishnaummadi/details/certifications/1741177279139/single-media-viewer?type=DOCUMENT&profileId=ACoAADtOgOgBxz4mxgdxIqvBi_m7SgUrO7KDl4Q&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BDHD4Yc8oTBK1kmk8uo2RoA%3D%3D",
  },
  {
    id: 2,
    name: "Frontend Developer - React",
    issuer: "Hacker Rank",
    date: "Apr 2024",
    url: "https://www.hackerrank.com/certificates/d3295d7cc9bf",
  },
  {
    id: 3,
    name: "Software Engineer",
    issuer: "Hacker Rank",
    date: "Apr 2024",
    url: "https://www.hackerrank.com/certificates/ac3e8ace9cc2",
  }
];
