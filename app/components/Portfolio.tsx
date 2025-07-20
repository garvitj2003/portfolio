"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Rekor",
      description:
        "Premium video call recording platform with local dual-side recording system, solving compressed low-quality recordings from platforms like Zoom",
      technologies: [
        "Next.js",
        "WebRTC",
        "Socket.IO",
        "PostgreSQL",
        "Prisma",
        "FFmpeg",
      ],
      liveUrl: "https://rekor.vercel.app/",
      githubUrl: "#",
      status: "In Development",
      period: "May 2025 - Present",
      thumbnailStyle: "sunburst-blue",
      highlights: [
        "Sophisticated chunked cloud upload with FFmpeg integration",
        "Real-time peer-to-peer connection using WebRTC",
        "Minimal data loss and seamless video merging",
      ],
    },
    {
      id: 2,
      title: "Know-Your-Friends",
      description:
        "Automated quiz generation using AI-powered question creation with Gemini Flash 2.5, eliminating manual effort of typing quiz questions",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "PostgreSQL",
        "Prisma",
        "Hono.js",
        "Gemini API",
      ],
      liveUrl: "https://knowyourfriends.vercel.app/",
      githubUrl: "#",
      status: "Completed",
      period: "Mar 2025 - Apr 2025",
      thumbnailStyle: "sunburst-green",
      highlights: [
        "Full-stack platform with dynamic OpenGraph",
        "Custom React hooks with AI-powered generation",
        "50+ quiz generations within days of launch",
      ],
    },
    {
      id: 3,
      title: "Vlode",
      description:
        "Medium-inspired content platform with modern full-stack architecture, solving intuitive long-form content creation needs",
      technologies: [
        "React",
        "Hono.js",
        "PostgreSQL",
        "Prisma",
        "Cloudflare Workers",
        "JWT",
      ],
      liveUrl: "https://vlode.vercel.app/",
      githubUrl: "#",
      status: "Completed",
      period: "Nov 2024",
      thumbnailStyle: "sunburst-orange",
      highlights: [
        "React frontend with Hono.js backend on Cloudflare Workers",
        "Secure JWT-based authentication using WebCrypto API",
        "Custom UI library with Tailwind CSS and Framer Motion",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#aaaaaa] font-jetbrains-mono text-sm uppercase tracking-wider mb-4">
            PROJECTS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-jetbrains-mono">
            Discover what I&apos;ve created
          </h2>
          <p className="text-lg text-[#aaaaaa] max-w-2xl mx-auto">
            Each piece reflects my passion for innovation and commitment to
            delivering high-quality results. Feel free to explore and get
            inspired!
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-[#111111] rounded-xl overflow-hidden border border-[#222] hover:border-[#333] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Project Thumbnail */}
              <div className="h-48 relative overflow-hidden">
                {/* Sunburst Pattern */}
                <div className="absolute inset-0">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 400 200"
                    className="w-full h-full"
                  >
                    {/* Sunburst rays */}
                    {Array.from({ length: 20 }).map((_, i) => {
                      const angle = i * 18 - 90; // 18 degrees per ray, start from top
                      const colorClass =
                        project.thumbnailStyle === "sunburst-blue"
                          ? "#3b82f6"
                          : project.thumbnailStyle === "sunburst-green"
                          ? "#10b981"
                          : "#f97316";
                      const opacity = 0.8 - (i % 3) * 0.2; // Varying opacity for depth
                      return (
                        <path
                          key={i}
                          d={`M200,100 L${
                            200 + Math.cos((angle * Math.PI) / 180) * 300
                          },${100 + Math.sin((angle * Math.PI) / 180) * 300} L${
                            200 + Math.cos(((angle + 9) * Math.PI) / 180) * 300
                          },${
                            100 + Math.sin(((angle + 9) * Math.PI) / 180) * 300
                          } Z`}
                          fill={colorClass}
                          opacity={opacity}
                        />
                      );
                    })}
                    {/* Center gradient overlay */}
                    <circle
                      cx="200"
                      cy="100"
                      r="80"
                      fill="url(#centerGradient)"
                    />
                    <defs>
                      <radialGradient id="centerGradient">
                        <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
                        <stop offset="100%" stopColor="rgba(0,0,0,0.4)" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20" />

                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title and Period */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 font-jetbrains-mono">
                    {project.title}
                  </h3>
                  <p className="text-[#aaaaaa] text-sm">{project.period}</p>
                </div>

                {/* Description */}
                <p className="text-[#cccccc] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="text-white text-sm font-semibold mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-[#aaaaaa] text-xs flex items-start"
                      >
                        <span className="w-1 h-1 bg-[#555] rounded-full mt-2 mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#1a1a1a] text-[#cccccc] px-2 py-1 rounded text-xs border border-[#333]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[#aaaaaa] text-xs py-1">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1f1f1f] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2a2a2a] transition-colors duration-200 flex-1 justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-[#333] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a1a1a] transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
