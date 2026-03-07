"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaWhatsapp, FaViber } from "react-icons/fa";
const linkedinUrl = "https://www.linkedin.com/in/johnrey-alcantara-947686262/";
const whatsappUrl = "https://wa.me/639915445170";
const viberUrl = "viber://add?number=+639915445170";

export default function Hero() {
    return (
        <section className="hero-container">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-card"
            >

                <Image
                    src="/profile_new.png"
                    width={160}
                    height={160}
                    className="profile-img"
                    alt="profile"
                />

                <h1 className="hero-title">
                    Johnrey Alcantara
                </h1>

                <p className="hero-subtitle">
                    Senior Software Engineer | Full Stack Developer
                </p>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "25px",
                    marginTop: "25px"
                }}>

                    {/* LinkedIn */}
                    <a href={linkedinUrl} target="_blank" className="social-icon">
                        <FaLinkedin />
                    </a>

                    {/* WhatsApp */}
                    <a href={whatsappUrl} target="_blank" className="social-icon">
                        <FaWhatsapp />
                    </a>

                    {/* Viber */}
                    <a href={viberUrl} target="_blank" className="social-icon">
                        <FaViber />
                    </a>

                </div>

                <a href="/JohnreyAlcantaraCV.pdf" className="resume-btn">
                    Download Resume
                </a>

            </motion.div>

        </section>
    );
}