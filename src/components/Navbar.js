"use client";

import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
    return (
        <nav className="navbar">

            {/* Left Logo */}
            <div className="nav-left">
                <Image
                    src="/logo.png"
                    width={120}
                    height={60}
                    className="logo-img"
                    alt="logo"
                />
            </div>

            {/* Center Menu */}
            <div className="nav-center">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#tech">Tech</a>
                <a href="#contact">Contact</a>
            </div>

            {/* Right Dark Toggle */}
            <div className="nav-right">
                <DarkModeToggle />
            </div>

        </nav>
    );
}