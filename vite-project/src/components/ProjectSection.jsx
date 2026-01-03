
const projects = [
    {
        id: 1,
        title: "Snap-Kart",
        description: "A beautiful E-Commerce web application using Python, Django and CSS",
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
        description: "Interactive movie-store web application with smooth user intutive using React",
        image: "/projects/project3.png",
        tags: ["JavaScript", "React", "tailwindCSS", "API"],
        demourl: "#",
        githubUrl: "#",    
    },
]; 

export const ProjectSection = () =>{
    return <section id="projects"></section>
};