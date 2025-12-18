import { Github, Linkedin, Heart } from "lucide-react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text">Utsav Verma</h3>
            <p className="text-sm text-muted-foreground mt-1">Aspiring Java Backend Developer & Software Engineer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/utsavvv"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/utsavverma"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/Utsavx_n"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <XIcon />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
              Made with <Heart className="h-4 w-4 text-secondary fill-secondary" /> by Utsav Verma
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
