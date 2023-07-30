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
// import Link from "next/link";
import { useState } from "react";

//components
import Sidebar from "./components/sidebar";
import AuthenticateComponents from "./components/auth-components";
//TODO move

//styles
import "./layout.css";

//assets

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <section id="dashboard-layout">
            <Sidebar isLoggedIn={isLoggedIn} />
            <AuthenticateComponents
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
            />
            <div>{children}</div>
            {/* include shared ui e.g. headers, sidebar,... */}
        </section>
    );
}
