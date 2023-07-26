// ===========================================================================
/// <summary>
/// theme-components.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 23.07.2023
/// </summary>
/// <created>ʆϒʅ, 23.07.2023</created>
/// <changed>ʆϒʅ, 26.07.2023</changed>
// ===========================================================================

"use client";

//modules
import { useState } from "react";
import React from "react";
// import Link from "next/link";

//components
import Navbar from "./navbar";
import Sidebar from "./sidebar";

//styles

//assets

let debug = true;

//https://github.com/facebook/create-react-app/pull/8177
//https://stackoverflow.com/questions/55370851/how-to-fix-binding-element-children-implicitly-has-an-any-type-ts7031

export function themeTypeTest() {
    // const [ currentTheme, setCurrentTheme ] = useState("light-theme");
    // return currentTheme;

    // type GenericComponentProps<T> = {
    //     prop: T
    //     callback: (t: T) => void
    // }
    type testProp = { cT: "" };
    let Test = (cT: any, setCT: any) => useState("aaa");
    const TestC = ({ cT }: testProp) => <div>AAA</div>;
    // test.setCT('aaaaa');??
    return Test;

    // const GenericComponent = (props: GenericComponentProps<String>) => { aa }
    // type GenericComponentProps<String> = {
    //     prop: String
    //     callback: (t: String) => void
    //  }
    // const GenericComponent = (props: GenericComponentProps<String>) => {  };
}

export function ThemeType() {
    const [currentTheme, setCurrentTheme] = useState("light-theme2");
    return currentTheme;
}

export default function ClientComponents({ cTheme }: { cTheme: any }) {
    const [currentTheme, setCurrentTheme] = useState("light-theme2");
    console.log(currentTheme);
    if (debug == true) {
        // console.log(themeType);
    }

    return (
        <>
            {/* {themeType} */}
            <Sidebar />
            <Navbar
                currentTheme={currentTheme}
                onThemeChange={setCurrentTheme}
            />
        </>
    );
}
