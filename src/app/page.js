import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import ScrollTopButton from "../components/ScrollTopButton";
import GalaxyBackground from "@/components/GalaxyBackground";

export default function Page() {
    return (
        <>
            <GalaxyBackground />
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <TechStack />
            <Contact />

            <ScrollTopButton />
        </>
    );
}