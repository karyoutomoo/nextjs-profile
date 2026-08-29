import React from "react";

export type Tabs = "about" | "projects" | "experience";
export type SetActiveTab = React.Dispatch<React.SetStateAction<Tabs>>;

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export interface Experience {
  id: number;
  company: string;
  /** Path to the company/product logo under /public. */
  logo?: string;
  position: string;
  duration: string;
  description: string;
  /** Notable initiatives delivered in the role. */
  highlights?: string[];
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
  icon: React.ReactNode;
}
