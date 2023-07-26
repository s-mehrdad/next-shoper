// ===========================================================================
/// <summary>
/// page.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 10.07.2023
/// </summary>
/// <created>ʆϒʅ, 10.07.2023</created>
/// <changed>ʆϒʅ, 21.07.2023</changed>
// ===========================================================================

//modules
import React from "react";

//components
import Sidebar from "../../components/sidebar";

//layouts
import RootLayout from "../../layout";
import DashboardLayout from "../layout";

//styles
import "../../globals.css";

//assets

function SettingsItems() {
    return (
        <ul>
            <li>aaa</li>
            <li>aab</li>
        </ul>
    );
}

export default function Settings() {
    return (
        <>
            <RootLayout>
                {/* <Sidebar /> */}
                <DashboardLayout>
                    <main id="view-content">
                        <p>Settings Page</p>
                        <SettingsItems />
                    </main>
                </DashboardLayout>
            </RootLayout>
        </>
    );
}
