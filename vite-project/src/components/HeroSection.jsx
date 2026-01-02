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
                <span className="text-accent opacity-0 animate-fade-in-delay-1 mr-2">KARTHIK</span>
                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 mr-2">K</span>
            </h1>
            {/* Short description or tagline */}
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 ">
                I create beautiful and functional web experiences.
                with a focus on modern design and seamless user interactions.
                both beautiful and functional.
            </p>

            <div>
                <a htref="#projects" className="cosmic-button">
                    View My Work
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};
