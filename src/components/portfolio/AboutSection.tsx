import profilePhoto from "@/assets/profile-photo.png";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Floating shapes */}
      <div className="floating-shape w-72 h-72 bg-glow-cyan -right-36 top-20" style={{ animationDelay: "-5s" }} />
      <div className="floating-shape w-56 h-56 bg-glow-blue -left-28 bottom-20" style={{ animationDelay: "-12s" }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Get to know me</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl" />
              
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border border-border/50 shadow-glow">
                <img
                  src={profilePhoto}
                  alt="Utsav Verma"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="text-center lg:text-left">
            <div className="glow-card p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                A Passionate Backend Developer
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am a BTech Information Technology student currently in my 5th semester, with a strong focus on backend development using Java and Spring Boot. I enjoy building structured, scalable server-side applications and designing clean RESTful APIs backed by relational databases such as PostgreSQL.
                </p>
                
                <p>
                  I have worked on multiple backend projects, including a Job Recruitment Portal, a Task Management System, and an E-commerce REST API, where I implemented CRUD operations, business logic, database integration using Hibernate/JPA, and layered application architecture.
                </p>
                
                <p>
                  I am currently seeking opportunities as a Backend Developer Intern, Java Developer, or Software Engineer (Fresher), where I can apply my skills, learn from experienced engineers, and continue growing as a backend-focused software developer.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">250+</div>
                  <div className="text-sm text-muted-foreground">DSA Problems</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
};

export default AboutSection;
