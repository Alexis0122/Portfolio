import React from "react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online store with product listings, cart functionality, and secure checkout.",
    tech: ["React", "Node.js", "MongoDB"],
    icon: "fas fa-project-diagram",
  },
  {
    title: "Task Management App",
    description:
      "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration.",
    tech: ["Vue.js", "Firebase", "TailwindCSS"],
    icon: "fas fa-tasks",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard for displaying and analyzing complex datasets with customizable charts.",
    tech: ["D3.js", "Express", "PostgreSQL"],
    icon: "fas fa-chart-line",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-transparent">
      <h2 className="text-4xl font-bold text-center text-duron mb-4">
        My <span className="text-white">Projects</span>
      </h2>
      <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
        Here are some of my recent projects. Each one was built to solve a
        specific problem or explore new technologies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-black/30 rounded-xl overflow-hidden shadow-md p-6 border border-white/10"
          >
            <div className="flex items-center justify-center h-40 mb-4">
              <i className={`${project.icon} text-5xl text-duron`}></i>
            </div>
            <h3 className="text-xl text-white font-semibold mb-2">
              {project.title}
            </h3>
            <p className="text-white/70 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-black/40 text-white px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
