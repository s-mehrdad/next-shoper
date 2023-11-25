// ===========================================================================
/// <summary>
/// sidebar.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 28.07.2023
/// </summary>
/// <created>ʆϒʅ, 28.07.2023</created>
/// <changed>ʆϒʅ, 22.11.2023</changed>
// ===========================================================================

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

export default function Sidebar({ isLoggedIn }: { isLoggedIn: any }) {
    isLoggedIn
        ? console.log("logged in, sent from sidebar", isLoggedIn)
        : console.log("not yet logged in...");

    return (
        <>
            <aside>
                {/* <label id="square-menu">
                    <input id="square-menu-input" type="checkbox" />
                    <div id="square-menu-span">
                        <span></span>
                        <span></span>
                    </div>
                    <div id="hamburger-menu-span">
                        <span></span>
                        <span></span>
                    </div>
                </label> */}
                {/* <div id="hyphen-menu">
                    <label>
                        <input type="checkbox" />
                        <p>Menu</p>
                        <span>-</span>
                    </label>
                </div> */}
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/settings">Settings</Link>
                    </li>
                    
                        <li>
                            <Link href="/dashboard/login">Log in</Link>
                        </li>
                </ul>
            </aside>
        </>
    );
    // return (
    //     <>
    //         <aside>
    //             {/* <label id="square-menu">
    //                 <input id="square-menu-input" type="checkbox" />
    //                 <div id="square-menu-span">
    //                     <span></span>
    //                     <span></span>
    //                 </div>
    //                 <div id="hamburger-menu-span">
    //                     <span></span>
    //                     <span></span>
    //                 </div>
    //             </label> */}
    //             {/* <div id="hyphen-menu">
    //                 <label>
    //                     <input type="checkbox" />
    //                     <p>Menu</p>
    //                     <span>-</span>
    //                 </label>
    //             </div> */}
    //             <ul>
    //                 <li>
    //                     <Link href="/">Home</Link>
    //                 </li>
    //                 <li>
    //                     <Link href="/dashboard/settings">Settings</Link>
    //                 </li>
    //                 <li>
    //                     <Link href="/login">Log in</Link>
    //                 </li>
    //             </ul>
    //         </aside>
    //     </>
    // );
}
