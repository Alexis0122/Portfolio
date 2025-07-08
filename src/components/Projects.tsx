const projects = [
  {
    title: "RedSocialPet",
    description:
      "RedSocialPet is a digital platform dedicated exclusively to pets, providing a safe and fun space for owners to interact, share content, and find events related to their pets. Through technological innovation, the platform offers a wide range of services.",
    tech: ["React", "Node.js", "Firebase"],
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
      "This app is designed to streamline the medical consultation process. Patients can easily schedule appointments, while doctors can manage their patient lists, record prescriptions, and access relevant information to provide more effective and personalized care. The platform helps improve communication, organization, and overall quality of medical services.",
    tech: ["Next.js", "WebApi", "Mantine", "React"],
    image: "/MiConsulta.png",
    gitLink: "",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-black/30 rounded-xl overflow-hidden shadow-md p-6 border border-white/10"
          >
            <div className="flex items-center justify-center h-48 mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-full max-w-full object-contain mx-auto"
              />
            </div>
            <h3 className="text-xl text-white font-semibold mb-2">
              {project.title}
            </h3>
            <p className="text-white/70 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-black/40 text-white px-2 py-1 rounded border border-gray-900"
                >
                  {tech}
                </span>
              ))}
              {/* <button key={project.gitLink} type="button" onClick={() => {}}>View</button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
