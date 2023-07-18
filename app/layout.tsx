// ===========================================================================
/// <summary>
/// page.tsx
// next-shoƥer
/// created by Mehrdad Soleimanimajd on 10.07.2023
/// </summary>
/// <created>ʆϒʅ, 10.07.2023</created>
/// <changed>ʆϒʅ, 18.07.2023</changed>
// ===========================================================================


//modules
import Link from "next/link";
import React from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <nav>
                    <ul>
                        <li>
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </nav>
                {children}
            </body>
            {/* include shared ui e.g. headers, sidebar,... */}
        </html>
    );
}
