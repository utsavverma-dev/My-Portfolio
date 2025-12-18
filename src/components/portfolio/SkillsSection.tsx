import { Code2, Database, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Backend Development",
    icon: Code2,
    skills: ["Java", "Spring Boot", "Spring MVC", "REST APIs", "Hibernate/JPA"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "Database Design"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "Maven", "Postman", "VS Code", "IntelliJ IDEA"],
  },
  {
    title: "Problem Solving",
    icon: Brain,
    skills: ["Data Structures", "Algorithms", "OOP Concepts"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Floating shapes */}
      <div className="floating-shape w-80 h-80 bg-glow-blue -left-40 top-1/3" style={{ animationDelay: "-8s" }} />
      <div className="floating-shape w-64 h-64 bg-glow-cyan right-0 bottom-0" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">What I know</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Technical Skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glow-card p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider mt-24" />
    </section>
  );
};

export default SkillsSection;
