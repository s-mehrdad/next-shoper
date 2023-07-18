// ===========================================================================
/// <summary>
/// page.tsx
// next-shoƥer
/// created by Mehrdad Soleimanimajd on 10.07.2023
/// </summary>
/// <created>ʆϒʅ, 10.07.2023</created>
/// <changed>ʆϒʅ, 18.07.2023</changed>
// ===========================================================================

//components
import Settings from "./settings/page";

//modules
import Link from "next/link";
import React from "react";

export default function Dashboard() {
    return (
        <main>
            <div>Dashboard</div>
            <Link href="/dashboard/settings">Settings</Link>
            <div></div>
            <main></main>
        </main>
    );
}
