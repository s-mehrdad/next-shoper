// ===========================================================================
/// <summary>
/// auth-components.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 28.07.2023
/// </summary>
/// <created>ʆϒʅ, 28.07.2023</created>
/// <changed>ʆϒʅ, 23.11.2023</changed>
// ===========================================================================

"use client";

//modules
import React from "react";
import Link from "next/link";
import { useState, useContext } from "react";

//components
import Login from "./login";
import LoginContext from "../../components/login-context";
// import AuthenticateContext from "./app-context";

//layouts
// import ..Layout from "./layout";

//styles

//assets

let isAuthenticatedOne = true; // developer- backend server-dev privileges

export default function Authenticate({
    isLoggedIn,
    setIsLoggedIn,
}: {
    isLoggedIn: any;
    setIsLoggedIn: any;
}) {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const loginContext = useContext(LoginContext);
    let cookie = false;
    if (cookie == false) cookie = isLoggedIn;
    console.log(cookie);
    console.log(loginContext);
    console.log(isLoggedIn);
    return (
        <>
            <LoginContext.Provider value={isLoggedIn}>
                <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </LoginContext.Provider>
        </>
    );
}
