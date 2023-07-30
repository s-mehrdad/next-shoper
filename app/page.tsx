// ===========================================================================
/// <summary>
/// page.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 10.07.2023
/// </summary>
/// <created>ʆϒʅ, 10.07.2023</created>
/// <changed>ʆϒʅ, 30.07.2023</changed>
// ===========================================================================

//modules

//components
// import ThemeContext from "./components/app-context";
import Products from "./products/products";

//layouts
import RootLayout from "./layout";

//styles
import "./globals.css";

//assets
// import Image from "next/image";

/* important credit */
/* copyright: following web site design is inspired and learned
from free fronted web site, source codes hosted in code pen
under MIT licenses of different authors and will be used commercially */

export default function Home() {
    return (
            <RootLayout>
                <main id="view-content">
                    <h2>next...shoƥer</h2>
                    <p>Home Page</p>
                    <Products />
                </main>
            </RootLayout>
    );
}
