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
// import Link from "next/link";

//components

//styles

//assets

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {/* include shared ui e.g. headers, sidebar,... */}
                {children}
            </body>
        </html>
    );
}
