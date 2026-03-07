export const metadata = {
    title: "Johnrey Alcantara | Software Engineer",
    description:
        "Portfolio of Johnrey Alcantara, full stack software engineer specializing in Java, Spring Boot, React, and cloud integrations.",
    keywords: [
        "software engineer",
        "full stack developer",
        "java developer",
        "react developer",
        "johnrey alcantara",
        "john alcantara",
        "johnrey",
        "john",
        "alcantara"
    ],
};

import { ThemeProvider } from "next-themes";
import "./globals.css";
import Chatbot from "@/components/Chatbot";
import SplashLoader from "@/components/SplashLoader";
import "./style.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <SplashLoader />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}

                    {/* Chatbot should be inside body */}
                    <Chatbot />

                </ThemeProvider>
            </body>
        </html>
    );
}