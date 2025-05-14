import React from "react";
import Image from "next/image";
import NavBar from "../navbar/NavBar";

export default function Header() {
    return (
        <>
        
            <header className="flex-row justify-center justify-items-center bg-gray-100 p-3">
                <div className="p-3">
                    <Image src="/logo-receitas.png" alt="Logo" width={200} height={100} />
                </div>
                <h1>Aqui vai o header</h1>

                <NavBar/>
            </header>

        </>
    )
}