"use client";

import React, { useState } from "react";

import dynamic from "next/dynamic";

import Image from "next/image";
import { Github, ExternalLink, MapPin, Calendar, Globe } from "lucide-react";

import assets from "../../assets";

/** WebGL touches window, so it must stay out of the static prerender. */
const HeroBackdrop = dynamic(() => import("../HeroBackdrop"), { ssr: false });

import {
  skills,
  projects,
  experience,
  aboutMe,
  socialLinks,
  visibleTabs,
} from "./portfolio.config";
import Reveal from "../Reveal";

import { glassCard } from "./portfolio.styles";
import { SetActiveTab, Tabs } from "./portfolio.types";

/**
 * Renders the header section of the portfolio with profile image, name, title, location, availability, and social links.
 */
const _renderHeaderSection = () => {
  return (
    <div className="relative overflow-hidden">
      <HeroBackdrop className="[mask-image:linear-gradient(to_bottom,black_60%,transparent)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent"></div>
      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden ring-1 ring-zinc-500/40 shadow-2xl">
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
            <h2 className="text-2xl text-zinc-400 mb-6">
              Full Stack Software Developer
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Full stack engineer, 5+ years shipping scalable apps end to end. I
              build AI-native — agents and LLMs in the workflow and in the
              product, not bolted on after.
            </p>

            {/* Location & Availability */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-zinc-400" />
                <span>DKI Jakarta</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400">Available for hire</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-zinc-400" />
                <span>Remote working preferred</span>
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
          {visibleTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-zinc-100 text-zinc-900 shadow-lg"
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
                <Reveal key={index} delay={index * 80} className="h-full">
                  <div className={`${glassCard} h-full rounded-2xl p-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-zinc-400">{skill.icon}</div>
                      <h4 className="text-xl font-semibold text-white">
                        {skill.category}
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {skill.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="inline-block bg-zinc-100/10 text-zinc-300 ring-1 ring-inset ring-white/10 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Bio Section */}
          <Reveal>
            <div className={`${glassCard} rounded-2xl p-8`}>
              <h3 className="text-3xl font-bold text-white mb-6">About Me</h3>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>{aboutMe}</p>
              </div>
            </div>
          </Reveal>
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
                className={`${glassCard} rounded-2xl overflow-hidden hover:scale-[1.02]`}
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
                        className="bg-zinc-100/10 text-zinc-300 ring-1 ring-inset ring-white/10 px-2 py-1 rounded text-xs"
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
                        className="flex items-center gap-2 bg-zinc-100/15 hover:bg-zinc-100/25 px-4 py-2 rounded-lg transition-colors"
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
            {experience.map((exp, index) => (
              <Reveal key={exp.id} delay={index * 80}>
                <div className={`${glassCard} rounded-2xl p-8`}>
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                    {exp.logo && (
                      <div className="w-14 h-14 shrink-0 rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={56}
                          height={56}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white">
                        {exp.position}
                      </h4>
                      <h5 className="text-xl text-zinc-400 font-medium">
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
                  {exp.highlights && (
                    <ul className="mb-6 space-y-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex gap-3 text-gray-300 leading-relaxed"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-zinc-100/10 text-zinc-300 ring-1 ring-inset ring-white/10 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
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
    <div className="min-h-screen bg-gradient-to-br from-[#111827] to-[#475569]">
      {_renderHeaderSection()}
      {_renderNavigationSection(activeTab, setActiveTab)}
      {_renderContentSection(activeTab)}
      {_showAnimation()}
    </div>
  );
};

export default Portfolio;
