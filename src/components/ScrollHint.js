"use client";

import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function ScrollHint() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setVisible(false);
            } else {
                setVisible(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!visible) return null;

    return (
        <div className="scroll-hint">
            <span>Scroll down for details</span>
            <FaChevronDown className="chevron" />
        </div>
    );
}