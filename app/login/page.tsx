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

//components
import Login from "../dashboard/components/login";

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

export default function Settings() {
    return (
        <>
                <main id="view-content">
                    <p>Login Page</p>
                    <LoginItems />
                </main>
        </>
    );
}
