"use client";

import { motion } from "framer-motion";

import {
    FaPhp,
    FaJava,
    FaJs,
    FaPython,
    FaSwift,
    FaReact,
    FaLinux,
    FaDatabase,
    FaCloud,
    FaServer,
    FaMicrochip
} from "react-icons/fa";

import {
    SiTypescript,
    SiSpringboot,
    SiMysql,
    SiPostgresql,
    SiMariadb,
    SiFirebase,
    SiNextdotjs,
    SiKubernetes,
    SiApachekafka,
    SiElastic,
    SiKibana
} from "react-icons/si";

export default function TechStack() {

    const tech = [
        { name: "PHP", icon: FaPhp },
        { name: "Java", icon: FaJava },
        { name: "JavaScript", icon: FaJs },
        { name: "TypeScript", icon: SiTypescript },

        { name: "Spring Boot", icon: SiSpringboot },

        { name: "MySQL", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MariaDB", icon: SiMariadb },

        { name: "Firebase", icon: SiFirebase },

        { name: "React.js", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },

        { name: "Python", icon: FaPython },
        { name: "Shell Script", icon: FaLinux },

        { name: "Swift", icon: FaSwift },
        { name: "Grails", icon: FaServer },

        { name: "Machine Learning", icon: FaMicrochip },

        { name: "n8n", icon: FaCloud },

        { name: "Kubernetes", icon: SiKubernetes },

        { name: "Tomcat7", icon: FaServer },

        { name: "Elastic", icon: SiElastic },
        { name: "Kibana", icon: SiKibana },

        { name: "Kafka", icon: SiApachekafka }
    ];

    return (
        <section id="tech">

            <h2 className="section-title">
                Tech Stack
            </h2>

            <div className="tech-row">

                {tech.map((item, i) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={i}
                            className="tech-wrapper"
                            whileHover={{ scale: 1.15 }}
                        >
                            <span className="tech-label">
                                {item.name}
                            </span>

                            <div className="tech-icon">
                                <Icon />
                            </div>
                        </motion.div>
                    );
                })}

            </div>
        </section>
    );
}