import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Karthik. Designed & Built by Karthik
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};