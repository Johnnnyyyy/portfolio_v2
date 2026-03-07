export const metadata = {
    title: "Johnrey Alcantara | Software Engineer",
    description:
        "Portfolio of Johnrey Alcantara, full stack software engineer specializing in Java, Spring Boot, React, and cloud integrations.",
    keywords: [
        "software engineer",
        "full stack developer",
        "java developer",
        "react developer",
    ],
};

import { ThemeProvider } from "next-themes";
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}