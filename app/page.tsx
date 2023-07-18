// ===========================================================================
/// <summary>
/// page.tsx
// next-shoƥer
/// created by Mehrdad Soleimanimajd on 10.07.2023
/// </summary>
/// <created>ʆϒʅ, 10.07.2023</created>
/// <changed>ʆϒʅ, 18.07.2023</changed>
// ===========================================================================

//layouts
import RootLayout from './layout'

//components
import Dashboard from "./dashboard/page";

//styles
import './globals.css'

//modules
import Link from "next/link";

//assets
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <RootLayout/>
        </main>
    );
}
