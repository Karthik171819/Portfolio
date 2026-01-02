import { Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-accent">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer
            </h3>

            <p className="text-muted-foreground">
              I'm a dedicated web developer with a passion for creating dynamic
              and responsive web applications. I focus on modern UI, smooth UX,
              and clean architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="#"
                className="px-6 py-2 rounded-full border border-accent text-accent hover:bg-accent/10 transition"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="gradient-border card-hover">
              <div className="glass p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <Code className="h-6 w-6 text-accent drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Clean Code</h4>
                    <p className="text-sm text-muted-foreground">
                      Writing maintainable and scalable code.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border card-hover">
              <div className="glass p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <User className="h-6 w-6 text-accent drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">User Focused</h4>
                    <p className="text-sm text-muted-foreground">
                      UX-driven and accessible designs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border card-hover">
              <div className="glass p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <Code className="h-6 w-6 text-accent drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Modern Stack</h4>
                    <p className="text-sm text-muted-foreground">
                      React, Tailwind, Node & more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>
    </section>
  );
};
