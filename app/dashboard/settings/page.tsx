// ===========================================================================
/// <summary>
/// page.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 10.07.2023
/// </summary>
/// <created>ʆϒʅ, 10.07.2023</created>
/// <changed>ʆϒʅ, 19.07.2023</changed>
// ===========================================================================

//modules
import React from "react";

//components
import Sidebar from "../../components/sidebar";

//layouts
import DashboardLayout from "../layout";

//styles
import "../../globals.css";

//assets

export default function Settings() {
    return (
        <main className="flex flex-col items-center content-between">
            <DashboardLayout>
                <Sidebar />
                <p>Settings Page</p>
            </DashboardLayout>
        </main>
    );
}
