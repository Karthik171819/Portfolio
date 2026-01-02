import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 "
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Name of the Portfolio or developer name */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in mr-2">Hi, I'm</span>
            <span className="text-accent opacity-0 animate-fade-in-delay-1 mr-2">
              KARTHIK
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 mr-2">
              K
            </span>
          </h1>
          {/* Short description or tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 ">
            I create beautiful and functional web experiences. with a focus on
            modern design and seamless user interactions. both beautiful and
            functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button inline-block">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20">
        <span className="text-sm">Scroll</span>
        <ArrowDown className="h-5 w-5 text-accent" />
      </div>
    </section>
  );
};
