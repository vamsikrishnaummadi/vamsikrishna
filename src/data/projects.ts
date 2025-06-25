import { Circle } from 'lucide-react';
import GoogleCloud from "../assets/GoogleCloud.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  client?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Google Cloud Community",
    description: "Developed and maintained the Google Cloud Community platform using React.js and Khoros. Migrated legacy Freemarker components to React for better performance, accessibility, and scalability",
    image: GoogleCloud,
    technologies: ["NextJs","ReactJs", "javascript", "Graphql", "Typescript", "JQuery", "HTML", "CSS", "REST API"],
    liveUrl: "https://www.googlecloudcommunity.com/",
    githubUrl: "client",
    client: "Google",
    featured: true
  },
  {
    id: 2,
    title: "Google For Education",
    description: "Implemented role- and rank-based access control for the Google for Education platform. Boosted engagement and accessibility for educators and learners through optimized UI workflows.",
    image: "/placeholder.svg",
    technologies: ["NextJs","Typescript","ReactJs", "javascript", "Graphql", "JQuery", "HTML", "CSS", "REST API"],
    liveUrl: "https://www.googleforeducommunity.com/",
    githubUrl: "client",
    client: "Google",
    featured: true,
  },
  {
    id: 3,
    title: "Zoom Community",
    description: "Built responsive community features for Zoom using Khoros and React.js. Contributed to UI development, bug fixing, and improving overall user experience.",
    image: "/placeholder.svg",
    technologies: ["NextJs","Typescript","ReactJs", "javascript", "Graphql", "JQuery", "HTML", "CSS", "REST API"],
    liveUrl: "https://community.zoom.com/",
    githubUrl: "client",
    client: "Zoom",
    featured: true
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product catalog, cart functionality, and payment integration.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with dark mode support and smooth animations.",
    image: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 7,
    title: "Weather Dashboard",
    description: "A weather application that displays current weather and forecasts for multiple locations with interactive charts.",
    image: "/placeholder.svg",
    technologies: ["JavaScript", "React", "Chart.js", "Weather API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 8,
    title: "Recipe Finder",
    description: "A recipe search application that allows users to find and save recipes based on ingredients they have.",
    image: "/placeholder.svg",
    technologies: ["React", "CSS", "Food API", "LocalStorage"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 9,
    title: "Fitness Tracker",
    description: "A fitness tracking application that allows users to log workouts, track progress, and set goals.",
    image: "/placeholder.svg",
    technologies: ["React Native", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];
