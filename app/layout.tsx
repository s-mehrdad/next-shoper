// ===========================================================================
/// <summary>
/// page.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 10.07.2023
/// </summary>
/// <created>ʆϒʅ, 10.07.2023</created>
/// <changed>ʆϒʅ, 31.07.2023</changed>
// ===========================================================================

"use client";

//modules
import React from "react";
import { useState } from "react";
// import { useContext } from "react";
// import Link from "next/link";

//components
import ThemeContext from "./components/app-context";
import LoginContext from "./components/login-context";
import ThemeComponents from "./components/theme-components";
import Authentication from "./dashboard/components/auth-components";

//styles
// import "./globals.css";

//assets

export default function RootLayout({
    children,
}: {
    // children: React.ReactNode; //?
    children: any; //?
}) {
    const [currentTheme, setCurrentTheme] = useState("light-theme");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <html lang="en">
            <body className={currentTheme}>
                <ThemeContext.Provider value={currentTheme}>
                    <LoginContext.Provider value={isLoggedIn}>
                        <ThemeComponents
                            currentTheme={currentTheme}
                            setCurrentTheme={setCurrentTheme}
                            // isloggedIn={isLoggedIn}
                        />
                        <Authentication
                            isLoggedIn={isLoggedIn}
                            setIsLoggedIn={setIsLoggedIn}
                        />
                        {/* include shared ui e.g. headers, sidebar,... */}
                        {children}
                    </LoginContext.Provider>
                </ThemeContext.Provider>
            </body>
        </html>
    );
}
