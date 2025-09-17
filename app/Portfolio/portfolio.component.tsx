"use client";

import React, { useState } from "react";

import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Calendar,
} from "lucide-react";

import assets from "../../assets";

import { skills, projects, experience, aboutMe, socialLinks } from "./portfolio.config";
import { SetActiveTab, Tabs } from "./portfolio.types";

/**
 * Renders the header section of the portfolio with profile image, name, title, location, availability, and social links.
 */
const _renderHeaderSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20"></div>
      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-purple-400/50 shadow-2xl">
              <Image
                src={assets.profile}
                alt="Profile Photo"
                height={300}
                width={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white mb-4">FAIQ</h1>
            <h2 className="text-2xl text-purple-300 mb-6">
              Full Stack Software Developer
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              A proficient software engineer with 5+ years of experience
              building scalable applications across the stack in finance
              industry.
            </p>

            {/* Location & Availability */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>DKI Jakarta</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-400" />
                <span className="text-green-400">Available for hire</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="bg-gray-800/50 hover:bg-gray-700/50 p-3 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Renders the navigation section with tabs for About, Projects, and Experience.
 * @param activeTab
 * @param setActiveTab
 * @returns Navigation Component
 */
const _renderNavigationSection = (
  activeTab: Tabs,
  setActiveTab: SetActiveTab,
) => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-center mb-12">
        <div className="bg-gray-800/50 rounded-full p-1 backdrop-blur-sm">
          {(["about", "projects", "experience"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-purple-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-gray-700/50"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/** 
 * Renders the content section based on the active tab (About, Projects, Experience).
 * @param activeTab
 * @returns Content Component
 */
const _renderContentSection = (activeTab: Tabs) => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-16">
      {activeTab === "about" && (
        <div className="space-y-12 animate-fade-in">
          {/* Skills Section */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-purple-400">{skill.icon}</div>
                    <h4 className="text-xl font-semibold text-white">
                      {skill.category}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="inline-block bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio Section */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-3xl font-bold text-white mb-6">About Me</h3>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>{aboutMe}</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "projects" && (
        <div className="space-y-8 animate-fade-in">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    height={200}
                    width={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 bg-gray-700/50 hover:bg-gray-600/50 px-4 py-2 rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4 text-white" />
                      <span className="text-white text-sm">Code</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 bg-purple-600/50 hover:bg-purple-500/50 px-4 py-2 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                        <span className="text-white text-sm">Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "experience" && (
        <div className="space-y-8 animate-fade-in">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Work Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white">
                      {exp.position}
                    </h4>
                    <h5 className="text-xl text-purple-300 font-medium">
                      {exp.company}
                    </h5>
                  </div>
                  <div className="text-gray-400 font-medium">
                    {exp.duration}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/** 
 * Defines the fade-in animation for content transitions.
 * @returns Style animation
 */
const _showAnimation = () => {
  return (
    <style jsx>{`
      .animate-fade-in {
        animation: fadeIn 0.5s ease-in-out;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
  );
};

/** 
 * Main Portfolio component that manages state and renders header, navigation, and content sections.
 */
const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tabs>("about");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {_renderHeaderSection()}
      {_renderNavigationSection(activeTab, setActiveTab)}
      {_renderContentSection(activeTab)}
      {_showAnimation()}
    </div>
  );
};

export default Portfolio;
