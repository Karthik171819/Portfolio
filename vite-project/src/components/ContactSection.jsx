import { Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text=3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-accent"> Touch </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m actively looking for entry-level opportunities as a JavaScript
          Full-Stack Developer. I enjoy building real-world web applications and
          continuously improving my skills. If you’d like to collaborate or
          think I’d be a good fit for your team, feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">
                    Email
                  </h4>
                  <a href="mailto:karthikkumar092004@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors">
                    karthikkumar092004@gmail.com
                  </a>
                </div>
              </div>

              {/* phone info */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">
                    Phone
                  </h4>
                  <a href="tel:+91 9731764017"
                  className="text-muted-foreground hover:text-accent transition-colors">
                    +91 9731764017
                  </a>
                </div>
              </div>

              {/* location details */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">
                    Location
                  </h4>
                  <a 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Bengaluru, INDIA
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
