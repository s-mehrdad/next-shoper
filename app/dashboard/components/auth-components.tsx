// ===========================================================================
/// <summary>
/// auth-components.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 28.07.2023
/// </summary>
/// <created>ʆϒʅ, 28.07.2023</created>
/// <changed>ʆϒʅ, 30.07.2023</changed>
// ===========================================================================

"use client";

//modules
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useContext } from "react";

//components
import Login from "./login";
import LoginContext from "./app-context";
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
    return (
        <>
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </>
    );
}
