// ===========================================================================
/// <summary>
/// page.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 22.11.2023
/// </summary>
/// <created>ʆϒʅ, 22.11.2023</created>
/// <changed>ʆϒʅ, 22.11.2023</changed>
// ===========================================================================

//modules
import React from "react";
// import { useState } from "react";

//components
import Authentication from "../components/auth-components";

//layouts
import DashboardLayout from "../layout";

//styles
import "../../globals.css";

//assets

function LoginItems() {
    return (
        <ul>
            <li>...</li>
        </ul>
    );
}

export default function Login() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <main id="view-content">
                <p>Login Page</p>
                <LoginItems />
                {/* <Authentication
                /> */}
            </main>
        </>
    );
}
