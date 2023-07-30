// ===========================================================================
/// <summary>
/// navbar.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 23.07.2023
/// </summary>
/// <created>ʆϒʅ, 23.07.2023</created>
/// <changed>ʆϒʅ, 30.07.2023</changed>
// ===========================================================================

//modules
import Link from "next/link";
// import { useState } from "react";

//components

//layouts
// import ..Layout from "./layout";

//styles
import "./navbar.css";

//assets
// import Image from "next/image";

export default function Navbar({
    currentTheme = "light-theme",
    onThemeChange,
}: {
    currentTheme: any;
    onThemeChange: any;
}) {
    // function themeSwitch(e) {
    console.log(currentTheme);
    // }

    return (
        <>
            <nav className="bg-yellow-400">
                <form name="theme" id="theme-hyphen-menu">
                    <label id="dark-theme-menu">
                        <input
                            id="dark-theme-input"
                            type="radio"
                            name="theme"
                            value="dark-theme"
                            onChange={(e) => onThemeChange(e.target.value)}
                        />
                        <span id="dark-theme-caption">Dark</span>
                        {/* <div>Dark</div> */}
                        <span id="dark-theme-span">-</span>
                    </label>
                    <label id="light-theme-menu">
                        <input
                            id="light-theme-input"
                            type="radio"
                            name="theme"
                            value="light-theme"
                            onChange={(e) => onThemeChange(e.target.value)}
                        />
                        {/* <div>Light</div> */}
                        <span id="light-theme-caption">Light</span>
                        <span id="light-theme-span">-</span>
                    </label>
                </form>
            </nav>
            {/* <aside>
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
            </aside> */}
        </>
    );
}

// function SidebarState() {
//     return (
//         <>
//             <Sidebar
//                 theme={currentTheme}
//                 onThemeChange={setCurrentTheme}
//             ></Sidebar>
//         </>
//     );
// }
