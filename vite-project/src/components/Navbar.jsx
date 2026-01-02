import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems =[
    { name: "Home", href: "#hero"},
    { name: "About", href: "#about"},
    { name: "Skills", href: "#skills"},
    { name: "Projects", href: "#projects"},
    { name: "Contact", href: "#contact"},
];

export const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    //useEffect to handle scroll event
    useEffect(() =>{
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return <nav className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md py-3" : "py-5"
    )}>
        
    </nav>
}