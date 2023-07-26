// ===========================================================================
/// <summary>
/// client-components.tsx
/// next-shoƥer
/// created by Mehrdad Soleimanimajd on 25.07.2023
/// </summary>
/// <created>ʆϒʅ, 25.07.2023</created>
/// <changed>ʆϒʅ, 26.07.2023</changed>
// ===========================================================================

"use client";

//modules
import React from "react";
import { useState } from "react";
// import Image from "next/image";

//components

//styles
import "./products.css";

//assets

let debug = true;

function Product({ product }: { product: any }) {
    return (
        <>
            <tbody>
                <tr>
                    <td className="w-40 border-2 align-middle text-center">
                        {product.name}
                    </td>
                    <td>
                        <img src={product.img} alt={product.name} />
                    </td>
                </tr>
            </tbody>
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

    // if (ready == true) {
    //     productsState.filter
    // }

    productsState.forEach((element: any) => {
        if (ready == true) {
            if (element.ready == true) {
                productsArray.push(<Product product={element} />);
            }
        } else {
            productsArray.push(<Product product={element} />);
        }
        // productsArray.fi
    });
    return <>{productsArray}</>;
}

export default function Products() {
    const [readyState, setReadyState] = useState(false);
    // console.log(readyState);
    return (
        <>
            <Filters readyState={readyState} setReadyState={setReadyState} />
            <table>
                <FilterProducts products={PRODUCTS} ready={readyState} />
            </table>
        </>
    );
}

const PRODUCTS = [
    { id: 0, name: "n1", model: "m1", img: "../favicon.ico", ready: true },
    { id: 0, name: "n2", model: "m1", img: "../favicon.ico", ready: true },
    { id: 0, name: "n3", model: "m2", img: "../favicon.ico", ready: true },
    { id: 0, name: "n4", model: "m2", img: "../favicon.ico", ready: false },
];
