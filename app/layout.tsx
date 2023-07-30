// ===========================================================================
/// <summary>
/// page.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 10.07.2023
/// </summary>
/// <created>ʆϒʅ, 10.07.2023</created>
/// <changed>ʆϒʅ, 30.07.2023</changed>
// ===========================================================================

"use client";

//modules
import React from "react";
import { useState } from "react";
// import { useContext } from "react";
// import Link from "next/link";

//components
import ThemeComponents from "./components/theme-components";
import ThemeContext from "./components/app-context";

//styles
// import "./globals.css";

//assets

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [currentTheme, setCurrentTheme] = useState("light-theme");
    return (
        <html lang="en">
            <body className={currentTheme}>
                <ThemeContext.Provider value={currentTheme}>
                    <ThemeComponents
                        currentTheme={currentTheme}
                        setCurrentTheme={setCurrentTheme}
                    />
                    {/* include shared ui e.g. headers, sidebar,... */}
                    {children}
                </ThemeContext.Provider>
            </body>
        </html>
    );
}
