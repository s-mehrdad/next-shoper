// ===========================================================================
/// <summary>
/// page.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 28.07.2023
/// </summary>
/// <created>ʆϒʅ, 28.07.2023</created>
/// <changed>ʆϒʅ, 31.07.2023</changed>
// ===========================================================================

//modules
import React from "react";

//components
// import Sidebar from "../../components/sidebar";

//layouts
import RootLayout from "../../layout";
import DashboardLayout from "../layout";

//styles
import "../../globals.css";

//assets

function SettingsItems() {
    return (
        <ul>
            <li>Already bought</li>
            <li>Waiting for pay</li>
            <li>Wish list</li>
            <li>...</li>
        </ul>
    );
}

export default function Settings() {
    return (
        <>
            {/* <RootLayout> */}
                <DashboardLayout>
                    <main id="view-content">
                        <p>User Space</p>
                        <SettingsItems />
                    </main>
                </DashboardLayout>
            {/* </RootLayout> */}
        </>
    );
}
