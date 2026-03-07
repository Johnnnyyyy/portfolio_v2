"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Project list
const projectList = [
    {
        url: "https://etrade.net.ph",
        title: "eTrade Portal",
        desc: "A platform operated by Cargo Data Exchange Center, Inc. (CDEC) that provides electronic commerce, trade, and logistics solutions for Philippine businesses.",
        tech: "Grails 1.3.7 | Java, MySQL, API, Auth",
        image: "/projects/Screenshot_1.png"
    },
    {
        url: "https://peza.etrade.net.ph",
        title: "PEZA",
        desc: "The official electronic portal for the Philippine Economic Zone Authority (PEZA) e-Systems, designed forlocators to process trade-related documents online.",
        tech: "Grails 1.2.5 | Java, MySQL, API, Auth",
        image: "/projects/Screenshot_2.png"
    },
    {
        url: "https://fedex.etrade.net.ph",
        title: "FEDEX",
        desc: "Designed for FedEx Philippines clients to manage import clearances, customs documentation, and related electronic trade processes.",
        tech: "Grails 1.3.7 | Java, MySQL, API, Auth",
        image: "/projects/Screenshot_1.png"
    },
    {
        url: "https://gofast.ph",
        title: "GoFast",
        desc: "A web-based, electronic empty container return system in the Philippines designed for shipping lines, truckers, and depots to manage container returns.",
        tech: "Grails 2.4.1 | Java, MySQL, API, Auth",
        image: "/projects/Screenshot_3.png"
    },
    {
        url: "https://cdc.etrade.net.ph",
        title: "CDC",
        desc: "An online portal operated by the Cargo Data Exchange Center, Inc. (CDEC) specifically for Clark Development Corporation (CDC) to facilitate electronic services, primarily the Electronic Transfer Admission Permit (eTaps) system.",
        tech: "Grails 2.4.1 | Java, MySQL, API, Auth",
        image: "/projects/Screenshot_4.png"
    },
    {
        url: "https://ccbi.etrade.net.ph",
        title: "CCBI",
        desc: "An online portal operated by Cargo Data Exchange Center, Inc. (CDEC), designed for trade facilitation and electronic exchange of data between traders and the Philippine government.",
        tech: "Grails 2.4.1 | Java, MySQL, API, Auth",
        image: "/projects/Screenshot_5.png"
    },
    {
        url: "https://acmms.ph",
        title: "ACMMS",
        desc: "A technology-driven, IoT-based solution designed to track, monitor, and manage the location and status of shipping containers in real-time. These systems integrate GPS, RFID, and sensors to provide visibility across the supply chain, enhancing efficiency and security.",
        tech: "Quasar 2.12.4 | NestJS 9.x | MySQL, API, Auth",
        image: "/projects/Screenshot_6.png"
    },
    {
        url: "https://ptops.etrade.net.ph",
        title: "PTOPS",
        desc: "The One Portal System (PTOPS), which is the central digital platform used by the Philippine Economic Zone Authority (PEZA) to manage, automate, and streamline operations for locator enterprises.",
        tech: "Grails 1.3.7 | Springboot 3.2.10 | MySQL, PostgreSQL, API, Auth",
        image: "/projects/Screenshot_1.png"
    },
    {
        url: "https://reports.peza.etrade.net.ph",
        title: "PEZA Reports System",
        desc: "A secure online portal provided by CDEC for the Philippine Economic Zone Authority (PEZA). It serves as a central hub for registered enterprises to electronically manage, monitor, and submit import/export permits, zone transfer documents, and performance reports (eIPS, AEDS, eZTS).",
        tech: "Grails 1.2.5 | Java, MySQL, API, Auth",
        image: "/projects/Screenshot_2.png"
    }
];

export default function Projects() {
    return (
        <section id="projects">
            <h2 className="section-title">Recent Projects</h2>

            <div className="projects-grid">
                {projectList.map((project, i) => (
                    <motion.a
                        key={i}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="project-image">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="100%"
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        <h3 className="project-title">{project.title}</h3>

                        <p className="project-desc">{project.desc}</p>

                        <div className="project-tech">
                            <strong>Tech:</strong> {project.tech}
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}