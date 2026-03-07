"use client";

import { motion } from "framer-motion";

export default function Experience() {

    const experiences = [
        {
            title: "Team Lead - Software Development",
            company: "Apollo Technologies Inc.",
            period: "2024 - Present",
            location: "Makati, Metro Manila",

            description: [
                "Developed and implemented software development processes to streamline operations and increase efficiency.",
                "Led frontend and backend architecture development.",
                "Designed product roadmap and microservices architecture.",
                "Implemented automated testing and CI/CD workflows.",
                "API development and system integrations."
            ]
        },
        {
            title: "Full Stack Software Developer",
            company: "ODAT - One Day At a Time",
            period: "2022 - 2024",
            location: "Baclayon, Bohol",

            description: [
                "Implemented a Bitbucket Pipelines CI/CD workflow for automated deployment via bitbucket-pipelines.yml configuration.",
                "JIRA: JQL, workflows, custom fields, Scrum/Kanban boards, dashboards, REST API.",
                "cPanel: Domain/SSL config, MySQL setup, backups, security (mod_security/firewall).",
                "Amazon SP-API, BigCommerce V3 REST (OAuth), eBay REST APIs: Inventory sync, order fulfillment.",
                "Wordpress, Laravel, Chrome Extension, BigCommerce, Shopify",
                "Other: Graphics Design, Video Editing, Inventory Management"
            ]
        },
        {
            title: "Mid-Level Software Developer",
            company: "Tagbilaran City Hall - IT Department",
            period: "2020 - 2022",
            location: "Tagbilaran, Bohol",

            description: [
                "Collaborated with developers in program design and testing.",
                "Developed desktop and web applications.",
                "Maintained MySQL databases.",
                "Designed graphics and edit videos."
            ]
        },
        {
            title: "Junior Software Developer",
            company: "Service Agency",
            period: "2019 - 2020",
            location: "Tubigon, Bohol",

            description: [
                "Collaborated with developers in program design and testing.",
                "Developed web-based client applications.",
                "Maintained MySQL and Firebase databases.",
                "Developed Android applications using Java."
            ]
        },
        {
            title: "Full Stack Software Developer",
            company: "Freelance",
            period: "2019 - Present",
            location: "International",

            description: [
                "Built web applications from scratch using CodeIgniter, Laravel, WordPress, and Magento.",
                "Developed payment gateway integrations and POS systems.",
                "Implemented REST APIs for e-commerce platforms.",
                "Created Chrome extensions and automation tools.",
                "Performed graphics design and video editing."
            ],
            tech: "PHP, Java, JavaScript, MySQL, PostgreSQL, Firebase, AWS, Kubernetes, Docker, Elastic Stack"
        }
    ];

    return (
        <section id="experience">

            <h2 className="section-title">
                Experience
            </h2>

            <div className="experience-container">

                {experiences.map((exp, index) => (

                    <motion.div
                        key={index}
                        className="experience-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >

                        <h3>{exp.title}</h3>

                        <div className="exp-meta">
                            {exp.company} | {exp.period}
                            <br />
                            {exp.location}
                        </div>

                        <ul className="exp-list">
                            {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>

                        {exp.tech && (
                            <div className="exp-tech">
                                <strong>Tech:</strong> {exp.tech}
                            </div>
                        )}

                    </motion.div>

                ))}

            </div>
        </section>
    );
}