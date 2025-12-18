import { Github, Linkedin, ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating background shapes */}
      <div className="floating-shape w-96 h-96 bg-glow-blue -top-48 -left-48" />
      <div className="floating-shape w-80 h-80 bg-glow-cyan top-1/2 -right-40" style={{ animationDelay: "-7s" }} />
      <div className="floating-shape w-64 h-64 bg-glow-blue bottom-0 left-1/3" style={{ animationDelay: "-14s" }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="animate-fade-up">
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
                Welcome to my portfolio
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up-delay-1">
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text">Utsav Verma</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 animate-fade-up-delay-2">
             Aspiring Java Backend Developer & Software Engineer
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-up-delay-3">
              Passionate about building robust backend systems and scalable applications with clean, maintainable code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-up-delay-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="/Utsav_Verma_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-up-delay-3">
              <a
                href="https://github.com/utsavvv"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/utsavverma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Utsavx_n"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <XIcon />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-up">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl scale-110 animate-pulse-glow" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-glow-lg">
                <img
                  src={profilePhoto}
                  alt="Utsav Verma - Java Backend Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
