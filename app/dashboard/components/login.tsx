// ===========================================================================
/// <summary>
/// login.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 28.07.2023
/// </summary>
/// <created>ʆϒʅ, 28.07.2023</created>
/// <changed>ʆϒʅ, 31.07.2023</changed>
// ===========================================================================

//modules
import Link from "next/link";
import { useState } from "react";
import { useContext } from "react";

//components
import LoginContext from "../../components/login-context";
// import AuthenticateContext from "./app-context";

//layouts

//styles
import "./login.css";

//assets
// import Image from "next/image";

let isAuthenticatedOne = true; // developer- backend server-dev privileges
let debug = true;

export default function Login({
    isLoggedIn = false,
    setIsLoggedIn,
}: {
    isLoggedIn: any;
    setIsLoggedIn: any;
}) {
    const [operators, setOperators] = useState(OPERATORS);
    const [initial, setInitial] = useState("");
    const [phrase, setPhrase] = useState("");
    const [login, setLogin] = useState(false);

    const loginContext = useContext(LoginContext);

    console.log(loginContext);

    function onLogin() {
        operators.forEach((element: any) => {
            if (element.initial == initial) {
                if (element.phrase == phrase) {
                    setIsLoggedIn(true);
                    setLogin(true);
                    if (debug == true) {
                    }
                }
            }
        });
    }

    return (
        <div id="app-component-login-one">
            {isAuthenticatedOne ? (
                <p>welcome to you from authorities (AI :\)!</p>
            ) : (
                <p>welcome home!</p>
            )}
            {isLoggedIn}
            <form action="submit" name="login">
                <label htmlFor="user-name">UserName: </label>
                <input
                    type="text"
                    name="login"
                    id="user-name"
                    value={initial}
                    placeholder="initial"
                    onChange={(e) => setInitial(e.target.value)}
                />
                <br />
                <label htmlFor="user-pass">Password: </label>
                <input
                    type="text"
                    name="login"
                    id="user-pass"
                    value={phrase}
                    placeholder="phrase"
                    onChange={(e) => setPhrase(e.target.value)}
                />
                <input
                    type="button"
                    value="submit"
                    onClick={onLogin}
                    className="border-2"
                />
            </form>
        </div>
    );
}

const OPERATORS = [
    { id: 1, initial: "admin", sphere: "all", phrase: "aaa1" },
    { id: 2, initial: "content", sphere: "manager", phrase: "ccc1" },
    { id: 3, initial: "user", sphere: "shop", phrase: "sss1" },
];
