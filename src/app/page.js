import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import ScrollTopButton from "../components/ScrollTopButton";
import GalaxyBackground from "@/components/GalaxyBackground";
import ScrollHint from "@/components/ScrollHint";

export default function Page() {
    return (
        <>
            <GalaxyBackground />
            <ScrollHint />
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