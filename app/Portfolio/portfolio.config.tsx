import {
  Code,
  Database,
  Github,
  Mail,
  Linkedin,
  Server,
  Lamp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Project, Experience, Skill, Tabs } from "./portfolio.types";

export const socialLinks: { name: string; url: string; icon: LucideIcon }[] = [
  {
    name: "Mail",
    url: "mailto:karyoutomoo@gmail.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    url: "https://github.com/karyoutomoo",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/profilefaiq",
    icon: Linkedin,
  },
];
export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "React Native",
      "Mobile Development",
      "State Management",
      "Snapshot Testing",
    ],
    icon: <Code className="w-5 h-5" />,
  },
  {
    category: "Backend",
    items: [
      "Express.js",
      "Node.js",
      "Caching",
      "Message Queue",
      "GraphQL",
      "Unit Testing",
    ],
    icon: <Server className="w-5 h-5" />,
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL"],
    icon: <Database className="w-5 h-5" />,
  },
  {
    category: "Others",
    items: [
      "Version Control",
      "Environment Configuration",
      "CI/CD Pipeline Understanding",
      "Code Debugging",
      "Performance Optimization",
      "Agile Methodologies",
    ],
    icon: <Lamp className="w-5 h-5" />,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Personal portfolio website to showcase projects, skills, and experience. Built with React and Tailwind CSS.",
    technologies: ["React", "PostgreSQL", "Tailwind"],
    githubUrl: "https://github.com/karyoutomoo/nextjs-profile",
    liveUrl: "https://ecommerce-demo.com",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, file sharing, and team communication features.",
    technologies: ["Spring Boot", "PostgreSQL", "Thymeleaf"],
    githubUrl: "https://github.com/karyoutomoo/task-manager",
    liveUrl: "https://taskmanager-demo.com",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
  },
];

/** Tabs rendered in the navigation. Drop a tab here to hide it without deleting its content. */
export const visibleTabs: Tabs[] = ["about", "experience"];

export const experience: Experience[] = [
  {
    id: 1,
    company: "Sociolla",
    logo: "/logos/soco.png",
    position: "Full Stack Software Engineer (SDE III)",
    duration: "2026 - Present",
    description:
      "Senior contributor on non-commerce products and internal tooling: a social networking app and a product review platform serving Sociolla's beauty community. Build event-driven microservices backed by RabbitMQ and MongoDB, ship the cross-platform React Native client end to end, and review peers' designs and code.",
    technologies: [
      "React Native",
      "Express JS",
      "Rabbit Message Queue",
      "Mongoose",
      "TypeScript",
    ],
  },
  {
    id: 2,
    company: "Jenius SMBCI (Formerly BTPN)",
    logo: "/logos/jenius.png",
    position: "Full Stack Software Engineer",
    duration: "2019 - 2026",
    description:
      "Develop and maintain customer-facing applications serving 10M+ users. Built scalable services to automate tasks and improve performance.",
    highlights: [
      "Priority Banking \u2014 built the wealth-tier experience for high-net-worth customers, including tier-gated features and dedicated servicing flows.",
      "Mutual Funds \u2014 shipped in-app investment: fund discovery, risk profiling, subscription and redemption against custodian APIs.",
      "BI-FAST \u2014 integrated Bank Indonesia\u2019s real-time retail payment rail, replacing legacy transfers with 24/7 instant settlement.",
      "App UI Revamp \u2014 rebuilt the customer app\u2019s interface on a shared component library, cutting screen build time and unifying the design language.",
      "VISA OTP \u2014 implemented 3-D Secure one-time-password verification for card transactions, hardening online payment authentication.",
    ],
    technologies: [
      "React",
      "React Native",
      "Express JS",
      "Kafka Message Queue",
      "GraphQL API",
      "Flow JS Type Checker",
    ],
  },
  {
    id: 3,
    company: "AkuPintar App",
    logo: "/logos/akupintar.png",
    position: "Mobile Developer",
    duration: "2019",
    description:
      "Developed mobile app. Gained experience in a early stage startup ecosystem.",
    technologies: ["Java Android", "Swift iOS"],
  },
  {
    id: 4,
    company: "Blibli.com",
    logo: "/logos/blibli.png",
    position: "Intern Backend Developer",
    duration: "2018",
    description:
      "Helped refactor legacy code. Gained experience working in a large scale e-commerce platform.",
    technologies: ["Java", "Spring Boot", "MySQL"],
  },
];

export const aboutMe: string = `I\'m an experienced full stack developer who thrives on creating innovative solutions to complex problems. 
  With over 5 years in the industry, I\'ve had the privilege of working with startups and established companies, 
  helping them build scalable applications across the stack that serve millions of users.\n\nThis full stack perspective allows me to design efficient data flows, optimize performance across the
  entire application stack, and implement scalable solutions that grow with business needs. My
  experience with microservices and message queuing demonstrates my understanding of modern
  distributed system principles. I\'m passionate about writing clean, maintainable code and continuously learning new technologies to stay at the forefront of the industry.`;
