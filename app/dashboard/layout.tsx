// ===========================================================================
/// <summary>
/// page.tsx
// next-shoƥer
/// created by Mehrdad Soleimanimajd on 10.07.2023
/// </summary>
/// <created>ʆϒʅ, 10.07.2023</created>
/// <changed>ʆϒʅ, 18.07.2023</changed>
// ===========================================================================

import Settings from "./settings/page";

import React from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            {/* include shared ui e.g. headers, sidebar,... */}
            <nav></nav>
            {children}
        </section>
    );
}
