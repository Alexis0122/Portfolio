import { useRef, type MouseEvent } from "react";

const techColors: Record<string, string> = {
  React: "#61dafb",
  "Next.js": "#ffffff",
  "Node.js": "#339933",
  Firebase: "#ffca28",
  TailwindCss: "#06b6d4",
  TailwindCSS: "#06b6d4",
  Mantine: "#339af0",
  WebApi: "#512bd4",
};

const projects = [
  {
    title: "RedSocialPet",
    description:
      "RedSocialPet is a digital platform dedicated exclusively to pets, providing a safe and fun space for owners to interact, share content, and find events related to their pets.",
    tech: ["React", "Node.js", "Firebase", "TailwindCss"],
    image: "/RedSocialPet.png",
    gitLink: "https://github.com/Alexis0122/RedSocialPet",
  },
  {
    title: "CrowDevs",
    description:
      "CrowdDevs is an app focused on creative projects, where creators can present their ideas, receive community funding, and update backers on the project's progress.",
    tech: ["Next.js", "React", "Mantine"],
    image: "/CrowDevs.png",
    gitLink: "https://github.com/Alexis0122/webapp",
  },
  {
    title: "MiConsulta or QuickCare",
    description:
      "Streamlines medical consultation. Patients schedule appointments, doctors manage patient lists, record prescriptions, and access info for more effective care.",
    tech: ["Next.js", "WebApi", "Mantine", "React"],
    image: "/QuickCare.png",
    gitLink: "",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 12;
    const rotateY = (centerX - x) / 12;
    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  return (
    <div
      ref={cardRef}
      className="project-card group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-duron/40 hover:shadow-[0_0_30px_rgba(102,51,238,0.15)]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.15s ease, border-color 0.3s, box-shadow 0.3s" }}
    >
      <div className="relative h-48 overflow-hidden bg-black/20">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <h3 className="text-xl text-white font-semibold mb-2 group-hover:text-duron-light transition-colors">
          {project.title}
        </h3>
        <p className="text-white/70 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 rounded-full border transition-colors"
              style={{
                backgroundColor: `${techColors[tech] || "#63e"}18`,
                borderColor: `${techColors[tech] || "#63e"}40`,
                color: techColors[tech] || "#63e",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {project.gitLink && (
          <a
            href={project.gitLink}
            target="_blank"
            className="inline-flex items-center gap-1.5 text-sm text-duron-light font-medium hover:text-duron transition-colors group/link"
          >
            View Repo
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        )}
        {!project.gitLink && (
          <span className="text-sm text-white/70">Private project</span>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-transparent">
      <h2 className="text-4xl font-bold text-center mb-4">
        My <span className="bg-gradient-to-r from-duron to-duron-light bg-clip-text text-transparent">Projects</span>
      </h2>
      <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
        Here are some of my recent projects. Each one was built to solve a
        specific problem or explore new technologies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
