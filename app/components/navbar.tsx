// ===========================================================================
/// <summary>
/// navbar.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 23.07.2023
/// </summary>
/// <created>ʆϒʅ, 23.07.2023</created>
/// <changed>ʆϒʅ, 25.11.2023</changed>
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

export default function Navbar(props: any) {
    // function themeSwitch(e) {
    console.log(props.currentTheme);
    // }

    return (
        <>
            <nav id="app-component-navbar-one" className="bg-yellow-400">
                <ul>
                    <li>
                        <div id="theme-hyphen-menu">
                            <label id="dark-theme-menu">
                                <input
                                    id="dark-theme-input"
                                    type="radio"
                                    name="theme"
                                    value="dark-theme"
                                    onChange={(e) =>
                                        props.onThemeChange(e.target.value)
                                    }
                                />
                                {/* <div>Dark</div> */}
                                <span id="dark-theme-caption">Dark</span>
                                <span id="dark-theme-span">-</span>
                            </label>
                            <label id="light-theme-menu">
                                <input
                                    id="light-theme-input"
                                    type="radio"
                                    name="theme"
                                    value="light-theme"
                                    onChange={(e) =>
                                        props.onThemeChange(e.target.value)
                                    }
                                />
                                {/* <div>Light</div> */}
                                <span id="light-theme-caption">Light</span>
                                <span id="light-theme-span">-</span>
                            </label>
                        </div>
                    </li>
                    <li>
                        <div>
                            <label id="app-component-user-panel">
                                <input
                                    id="user-panel-checkbox"
                                    type="checkbox"
                                    name="theme"
                                    onChange={props.onUserPanelToggle}
                                />
                                <div>{props.children}</div>
                                <span>User</span>
                            </label>
                        </div>
                    </li>
                </ul>
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
