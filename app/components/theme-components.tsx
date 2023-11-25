// ===========================================================================
/// <summary>
/// theme-components.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 23.07.2023
/// </summary>
/// <created>ʆϒʅ, 23.07.2023</created>
/// <changed>ʆϒʅ, 25.11.2023</changed>
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

export default function ThemeComponents(props: any) {
    const contextT = useContext(ThemeContext);
    console.log(contextT);
    return (
        <>
            <ThemeContext.Provider value={props.currentTheme}>
                <Sidebar />
                <Navbar
                    currentTheme={props.currentTheme}
                    onThemeChange={props.setCurrentTheme}
                >
                    {props.children}
                </Navbar>
            </ThemeContext.Provider>
        </>
    );
}
