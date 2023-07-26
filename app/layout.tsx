// ===========================================================================
/// <summary>
/// page.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 10.07.2023
/// </summary>
/// <created>ʆϒʅ, 10.07.2023</created>
/// <changed>ʆϒʅ, 26.07.2023</changed>
// ===========================================================================

"use client";

//modules
import React from "react";
// import Link from "next/link";
import { useState } from "react";

//components
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
// import ThemeType from "./components/theme-components";
// import ThemeComponents from "./components/theme-components";

//styles
// import "./globals.css";

//assets

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [currentTheme, setCurrentTheme] = useState("light-theme");
    // setCurrentTheme(ThemeType);
    // let aaa = "";
    // console.log(ThemeType)
    return (
        <html lang="en">
            <body className={currentTheme}>
                <Sidebar />
                <Navbar
                    currentTheme={currentTheme}
                    onThemeChange={setCurrentTheme}
                />
                {/* <ThemeComponents cTheme={aaa} /> */}
                {/* include shared ui e.g. headers, sidebar,... */}
                {/* {currentTheme} */}
                {children}
            </body>
        </html>
    );
}
