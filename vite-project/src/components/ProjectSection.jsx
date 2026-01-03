import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Snap-Kart",
    description:
      "A beautiful E-Commerce web application using Python, Django and CSS",
    image: "/projects/project1.png",
    tags: ["Python", "Django", "CSS"],
    demourl: "#",
    githubUrl: "#",
  },

  {
    id: 2,
    title: "Currency-Converter",
    description: "A Currency-Conerter web application fetching API",
    image: "/projects/project2.png",
    tags: ["JavaScript", "HTML", "CSS", "API"],
    demourl: "#",
    githubUrl: "#",
  },

  {
    id: 3,
    title: "Movie-Vault",
    description:
      "Interactive movie-store web application with smooth user intutive using React",
    image: "/projects/project3.png",
    tags: ["JavaScript", "React",  "API"],
    demourl: "#",
    githubUrl: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-accent"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* image banner */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
                <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                            <span className="px-2 py-1 text-sm font-medium border rounded-full bg-secondary text-secondary-foreground">
                                {tag}
                                </span>
                        ))}
                    </div>  
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                        <a href="{project.demoUrl}">
                            {" "}
                            <ExternalLink/>
                        </a>
                        <a href="{project.demoUrl}">
                            <Github/>
                        </a>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
