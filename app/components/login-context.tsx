// ===========================================================================
/// <summary>
/// app-context.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 31.07.2023
/// </summary>
/// <created>ʆϒʅ, 31.07.2023</created>
/// <changed>ʆϒʅ, 31.07.2023</changed>
// ===========================================================================

"use client";

//modules
// import { useState } from "react";
import React, { createContext, useContext } from "react";

//components

//layouts

//styles

//assets

export const DebugContext = createContext(true);

export const ThemeContext = createContext("initial");

export const AuthenticateContext = createContext(true);
const LoginContext = createContext(false);
export const LoginPrivilegeContext = createContext("dev");

export function DebugProvider() {
    const debugContext = useContext(DebugContext);
    return debugContext;
}

export function AppContextProvider({
    children,
    setTheme = "system",
}: {
    children: React.ReactNode;
    setTheme: any;
}) {
    // const themeContext = useContext(ThemeContext);
    return (
        <>
            <ThemeContext.Provider value={setTheme}>
                {children}
            </ThemeContext.Provider>
        </>
    );
}

export default LoginContext;
