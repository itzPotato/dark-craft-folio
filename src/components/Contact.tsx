import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-medium mb-8">connect:</h2>

        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            always excited to chat about technology, collaboration opportunities, or just to connect with fellow builders. drop me a line and let's see what we can create together.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:brsashank@gmail.com"
              className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-smooth"
            >
              <Mail className="h-5 w-5" />
              <span className="text-link">brsashank@gmail.com</span>
            </a>

            <a
              href="https://github.com/itzPotato"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-smooth"
            >
              <Github className="h-5 w-5" />
              <span className="text-link">github.com/itzPotato</span>
            </a>

            <a
              href="https://www.linkedin.com/in/rohan-sashank-babbellapati-203660372/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-smooth"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-link">linkedin</span>
            </a>
          </div>

          <p className="text-muted-foreground text-sm pt-4">
            i try to respond to all emails within 48 hours. if you don't hear back, feel free to follow up — sometimes things get lost in the inbox. i appreciate your patience!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
