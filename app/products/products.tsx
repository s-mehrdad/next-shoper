// ===========================================================================
/// <summary>
/// client-components.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 25.07.2023
/// </summary>
/// <created>ʆϒʅ, 25.07.2023</created>
/// <changed>ʆϒʅ, 30.07.2023</changed>
// ===========================================================================

"use client";

//modules
import React from "react";
import { useState } from "react";
import { useContext } from "react";
// import Image from "next/image";

//components
// import DebugContext from "../components/app-context";

//styles
import "./products.css";

//assets

let debug = true;

function Product({ product }: { product: any }) {
    return (
        <>
            {/* <tbody> */}
            {/* <ul> */}
            <li
                key={product.id}
                id={product.id.toString()}
                className="w-40 h-16 min-h-fit border-2 align-middle text-center"
            >
                {product.name}
                <img src={product.img} alt={product.name} />
            </li>
            {/* </ul> */}
            {/* <tr key={product.id}>
                    <td className="w-40 border-2 align-middle text-center">
                        {product.name}
                    </td>
                    <td>
                        <img src={product.img} alt={product.name} />
                    </td>
                </tr> */}
            {/* </tbody> */}
        </>
    );
}

function Filters({
    readyState,
    setReadyState,
}: {
    readyState: any;
    setReadyState: any;
}) {
    return (
        <>
            <label htmlFor="readyStateUI">Show ready to ship?</label>
            <input
                type="checkbox"
                id="readyStateUI"
                checked={readyState}
                onChange={(e) => setReadyState(e.target.checked)}
            />
            {readyState}
        </>
    );
}

function FilterProducts({ products, ready }: { products: any; ready: any }) {
    const [productsState, setProductsState] = useState(products);
    let productsArray: any[] = [];

    productsState.map((element: any) => {
        if (ready == true) {
            if (element.ready == true) {
                // productsArray.push(<Product product={element} />);
                productsArray.push(
                    <li
                        key={element.id}
                        className="w-40 h-16 min-h-fit border-2 align-middle text-center"
                    >
                        {element.name}
                        <img src={element.img} alt={element.name} />
                    </li>
                );
            }
        } else {
            productsArray.push(
                <li
                    key={element.id}
                    className="w-40 h-16 min-h-fit border-2 align-middle text-center"
                >
                    {element.name}
                    <img src={element.img} alt={element.name} />
                </li>
            );
            // productsArray.push(<Product product={element} />);
        }
    });
    return <>{productsArray}</>;
}

export default function Products() {
    const [readyState, setReadyState] = useState(false);
    return (
        <>
            <Filters readyState={readyState} setReadyState={setReadyState} />
            {/* <table> */}
            <ul>
                <FilterProducts products={PRODUCTS} ready={readyState} />
            </ul>
            {/* </table> */}
        </>
    );
}

const PRODUCTS = [
    { id: 0, name: "n1", model: "m1", img: "../favicon.ico", ready: true },
    { id: 1, name: "n2", model: "m1", img: "../favicon.ico", ready: true },
    { id: 2, name: "n3", model: "m2", img: "../favicon.ico", ready: false },
];
