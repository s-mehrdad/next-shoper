// ===========================================================================
/// <summary>
/// sidebar.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 10.07.2023
/// </summary>
/// <created>ʆϒʅ, 18.07.2023</created>
/// <changed>ʆϒʅ, 31.07.2023</changed>
// ===========================================================================

//modules
import Link from "next/link";
import { useContext, useState } from "react";

//components
import LoginContext from "./login-context";

//layouts
// import ..Layout from "./layout";

//styles
import "./sidebar.css";

//assets
// import Image from "next/image";

export default function Sidebar() {
    const isLoggedInContext = useContext(LoginContext);
    return (
        <>
            <div id="test"></div>
            <aside id="app-component-sidebar-one">
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
                    {isLoggedInContext ? (
                        <li>
                            <Link href="/dashboard/userspace">User Space</Link>
                        </li>
                    ) : (
                        <li>
                            <Link href="/dashboard/userspace">Log in</Link>
                        </li>
                    )}
                </ul>
            </aside>
        </>
    );
}
