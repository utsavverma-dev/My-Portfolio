import { Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 via-background to-background" />
      
      <div className="floating-shape w-80 h-80 bg-glow-blue -left-40 top-0" />
      <div className="floating-shape w-72 h-72 bg-glow-cyan -right-36 bottom-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Contact Me</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
          <div className="glow-card p-6 flex items-center gap-4 flex-1">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Email</h3>
              <p className="text-muted-foreground">utsavverma3114@gmail.com</p>
            </div>
          </div>

          <div className="glow-card p-6 flex items-center gap-4 flex-1">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Location</h3>
              <p className="text-muted-foreground">India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;