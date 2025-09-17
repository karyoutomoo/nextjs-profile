import { Code, Database, Github, Mail, Linkedin, Server, Lamp } from "lucide-react";

import { Project, Experience, Skill } from "./portfolio.types";

export const socialLinks: { name: string; url: string; icon: any }[] = [
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
  }
]
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
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
    githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, file sharing, and team communication features.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Tailwind"],
    githubUrl: "https://github.com/example/task-manager",
    liveUrl: "https://taskmanager-demo.com",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
  },
  {
    id: 3,
    title: "Weather Analytics Dashboard",
    description:
      "Data visualization dashboard for weather patterns with predictive analytics and interactive charts.",
    technologies: ["Vue.js", "Python", "FastAPI", "D3.js", "AWS"],
    githubUrl: "https://github.com/example/weather-dashboard",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop",
  },
];

export const experience: Experience[] = [
  {
    id: 1,
    company: "Jenius SMBCI (Formerly BTPN)",
    position: "Full Stack Software Engineer",
    duration: "2019 - Present",
    description:
      "Develop and maintain customer-facing applications serving 10M+ users. Built scalable services to automate tasks and improve performance.",
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
    id: 2,
    company: "AkuPintar App",
    position: "Mobile Developer",
    duration: "2019",
    description:
      "Developed mobile app. Gained experience in a early stage startup ecosystem.",
    technologies: ["Java Android", "Swift iOS"],
  },
  {
    id: 3,
    company: "Blibli.com",
    position: "Intern Backend Developer",
    duration: "2018",
    description:
      "Helped refactor legacy code. Gained experience working in a large scale e-commerce platform.",
    technologies: ["Java", "Spring Boot", "MySQL"],
  },
];

export const aboutMe: String = `I\'m an experienced full stack developer who thrives on creating innovative solutions to complex problems. 
  With over 5 years in the industry, I\'ve had the privilege of working with startups and established companies, 
  helping them build scalable applications across the stack that serve millions of users.\n\nThis full stack perspective allows me to design efficient data flows, optimize performance across the
  entire application stack, and implement scalable solutions that grow with business needs. My
  experience with microservices and message queuing demonstrates my understanding of modern
  distributed system principles. I\'m passionate about writing clean, maintainable code and continuously learning new technologies to stay at the forefront of the industry.`;
