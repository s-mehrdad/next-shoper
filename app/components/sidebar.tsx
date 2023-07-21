// ===========================================================================
/// <summary>
/// sidebar.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 10.07.2023
/// </summary>
/// <created>ʆϒʅ, 18.07.2023</created>
/// <changed>ʆϒʅ, 21.07.2023</changed>
// ===========================================================================

"useClient";

//modules
import Link from "next/link";
import { useState } from "react";

//components

//layouts
// import ..Layout from "./layout";

//styles
import "./sidebar.css";

//assets
// import Image from "next/image";

export default function Sidebar() {
    return (
        <>
            <nav className="bg-yellow-200"></nav>
            <aside>
                <label id="square-menu">
                    <input id="square-menu-input" type="checkbox" />
                    <div id="square-menu-span">
                        <span></span>
                        <span></span>
                    </div>
                    <div id="hamburger-menu-span">
                        <span></span>
                        <span></span>
                    </div>
                </label>
                <div id="hyphen-menu">
                    <label>
                        <input type="checkbox" />
                        <p>Menu</p>
                        <span>-</span>
                    </label>
                </div>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/settings">Settings</Link>
                    </li>
                </ul>
            </aside>
        </>
    );
}
