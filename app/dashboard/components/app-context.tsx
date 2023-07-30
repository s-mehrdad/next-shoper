// ===========================================================================
/// <summary>
/// authenticate-context.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 28.07.2023
/// </summary>
/// <created>ʆϒʅ, 28.07.2023</created>
/// <changed>ʆϒʅ, 30.07.2023</changed>
// ===========================================================================

//modules
// import { useState } from "react";
import { createContext } from "react";

//components

//layouts

//styles

//assets

const ThemeContext = createContext("initial");

export const AuthenticateContext = createContext(true);
export const LoginContext = createContext(false);
export const LoginPrivilegeContext = createContext("dev");

export default ThemeContext;
