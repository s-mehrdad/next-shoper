// ===========================================================================
/// <summary>
/// page.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 10.07.2023
/// </summary>
/// <created>ʆϒʅ, 10.07.2023</created>
/// <changed>ʆϒʅ, 19.07.2023</changed>
// ===========================================================================

//modules
import React from "react";
// import Link from "next/link";

//components

//styles

//assets

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <div>{children}</div>
            {/* include shared ui e.g. headers, sidebar,... */}
        </section>
    );
}
