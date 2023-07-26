// ===========================================================================
/// <summary>
/// page.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 10.07.2023
/// </summary>
/// <created>ʆϒʅ, 10.07.2023</created>
/// <changed>ʆϒʅ, 24.07.2023</changed>
// ===========================================================================

//modules
// import Link from "next/link";

//components
import Sidebar from "../components/sidebar";

//layouts
import DashboardLayout from "./layout";
// import RootLayout from "../layout";

//styles
import "../globals.css";

//assets

function Test() {
    return (
        <>
            <p>Dashboard Page</p>
            <p>Dashboard Page</p>
        </>
    );
}

export default function Dashboard() {
    return (
        <DashboardLayout>
            <main >
                <Test />
            </main>
        </DashboardLayout>
    );
}
