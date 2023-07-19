// ===========================================================================
/// <summary>
/// sidebar.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 10.07.2023
/// </summary>
/// <created>ʆϒʅ, 18.07.2023</created>
/// <changed>ʆϒʅ, 19.07.2023</changed>
// ===========================================================================

"useClient";

//modules
import Link from "next/link";
import { useState } from "react";

//components

//layouts
// import ..Layout from "./layout";

//styles
// import "./globals.css";

//assets
// import Image from "next/image";

export default function Sidebar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link href="/dashboard">Dashboard</Link>
                        <Link href="/dashboard/settings">Settings</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
