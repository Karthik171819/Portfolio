import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { cn } from "@/lib/utils";
// import { useToast } from "@/hooks/use-toast.js";

export const ContactSection = () => {
  // const { toast } = useToast();

  // const handleSubmit = (e) =>{
  //       e.preventDefault()

  //       setTimeout(() => {
  //         toast({
  //           title: "Message sent!",
  //           description: "Thank you for your message. I'll get back to you soon,",
  //         });
  //       }, 1500)
  // }
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text=3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-accent"> Touch </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m actively looking for entry-level opportunities as a JavaScript
          Junior Developer. I enjoy building real-world web applications and
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
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:karthikkumar092004@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
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
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+91 9731764017"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
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
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-accent transition-colors">
                    Bengaluru, INDIA
                  </a>
                </div>
              </div>
            </div>

            {/* social media active links */}
            <div className="pt-8 flex flex-col items-center">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/karthik-k-dev/">
                  <Linkedin />
                </a>

                <a href="https://github.com/Karthik171819">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          {/* contact form */}
          <div className="bg-card p-8 rounded-lg shadow-xs" >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-accent"
                  placeholder="enter a name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-accent"
                  placeholder="enter your mail id"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-accent resize-none"
                  placeholder="enter a message"
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={16}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
