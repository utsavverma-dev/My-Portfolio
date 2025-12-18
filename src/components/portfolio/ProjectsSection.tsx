import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import hirelyImage from "@/assets/hirely.png";
import taskflowImage from "@/assets/taskflow.png";
import ecommerceImage from "@/assets/ecommerece.png";

const projects = [
  {
    title: "Hirely : Job Recruitment Portal",
    description: "A backend-driven job recruitment platform connecting recruiters and job seekers through secure RESTful APIs. Manages job postings, applications, and user roles with clean architecture.",
    technologies: ["Java", "Spring Boot", "Hibernate/JPA", "PostgreSQL"],
    github: "https://github.com/utsavverma-dev/Hirely-Job-Portal",
    features: ["REST APIs for jobs & applications", "Role-based flow", "Layered architecture"],
    image: hirelyImage,
  },
  {
    title: "TaskFlow : Task Management System",
    description: "Backend-focused system for creating, updating, tracking, and managing tasks via RESTful APIs. Emphasizes clean API design and maintainable architecture.",
    technologies: ["Java", "Spring Boot", "Hibernate/JPA", "PostgreSQL"],
    github: "https://github.com/utsavverma-dev/Taks-Manager-TaskFlow",
    features: ["Task status tracking", "CRUD operations", "Global exception handling"],
    image: taskflowImage,
  },
  {
    title: "E-Commerce REST API",
    description: "Backend-only E-commerce API handling product management, user operations, and order processing with scalable design and database-driven workflows.",
    technologies: ["Java", "Spring Boot", "Hibernate/JPA", "PostgreSQL"],
    github: "https://github.com/utsavverma-dev/E-commerce-RestApi",
    features: ["Product & order management", "Order tracking logic", "Modular architecture"],
    image: ecommerceImage,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="floating-shape w-72 h-72 bg-glow-blue left-1/4 -top-36" />
      <div className="floating-shape w-96 h-96 bg-glow-cyan -right-48 bottom-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">My work</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Featured Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Backend projects showcasing Java & Spring Boot expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.title} className="glow-card group">
              <div className="h-40 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center border-b border-border/50 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="text-xs text-muted-foreground mb-4 space-y-1">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
};

export default ProjectsSection;