// ===========================================================================
/// <summary>
/// theme-components.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 23.07.2023
/// </summary>
/// <created>ʆϒʅ, 23.07.2023</created>
/// <changed>ʆϒʅ, 31.07.2023</changed>
// ===========================================================================

"use client";

//modules
import React from "react";
import { useState } from "react";
import { useContext } from "react";

//components
// import DebugProvider from "./app-context";
import ThemeContext from "./app-context";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

//styles

//assets

export default function ThemeComponents({
    currentTheme,
    setCurrentTheme,
}: {
    currentTheme: any;
    setCurrentTheme: any;
    }) {
    const contextT = useContext(ThemeContext);
    console.log(contextT)
    return (
        <>
            <ThemeContext.Provider value={currentTheme}>
                <Sidebar />
                <Navbar
                    currentTheme={currentTheme}
                    onThemeChange={setCurrentTheme}
                />
            </ThemeContext.Provider>
        </>
    );
}
