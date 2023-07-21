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
// import Link from "next/link";

//components
import Sidebar from "./components/sidebar";

//layouts
import RootLayout from "./layout";

//styles
import "./globals.css";

//assets
import Image from "next/image";

export default function Home() {
    return (
        <RootLayout>
            <Sidebar />
            <main id="view-content">
                <p>Home Page</p>
            </main>
        </RootLayout>
    );
}
