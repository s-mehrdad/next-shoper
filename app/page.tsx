// ===========================================================================
/// <summary>
/// page.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 10.07.2023
/// </summary>
/// <created>ʆϒʅ, 10.07.2023</created>
/// <changed>ʆϒʅ, 31.07.2023</changed>
// ===========================================================================

//modules

//components
// import ThemeContext from "./components/app-context";
import Products from "./products/products";

//layouts
import RootLayout from "./layout";

//styles
import "./globals.css";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

//assets
// import Image from "next/image";

/* important credits */
/* copyright: following template is built upon next/ react
web development frameworks and strongly consumes their APIs created 
to be used commercially under MIT licenses */
/* copyright: following web site design is inspired and learned
from free fronted web site, source codes hosted in code pen
under MIT licenses of different authors and will be used commercially */

const Home= () => {
    return (
        <main id="view-content">
            <h2>next...shoƥer</h2>
            <p>Home Page</p>
            <Products />
        </main>
    );
};

Home.getLayout = function getLayout(page: ReactElement) {
    return <RootLayout>{page}</RootLayout>;
};

// single shared
// export function Homea() {
//     return (
//         <RootLayout>
//             <main id="view-content">
//                 <h2>next...shoƥer</h2>
//                 <p>Home Page</p>
//                 <Products />
//             </main>
//         </RootLayout>
//     );
// }

export default Home;

// with type script
// TODO learn type script
// type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//     getLayout?: (page: ReactElement) => ReactNode;
// };

// type AppPropsWithLayout = AppProps & {
//     Component: NextPageWithLayout;
// };

// export function NextPageWithLayoutDefaultExport({
//     Component,
//     pageProps,
// }: AppPropsWithLayout) {
// // }:{
// //     Component: any;
// //     pageProps: any;
// // }) {
//     // use layout of page if available
//     const getLayout = Component.getLayout || (page => page);

//     return getLayout(<Component {...pageProps} />);
// }
