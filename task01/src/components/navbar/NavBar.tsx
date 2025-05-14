import Link from "next/link";
import React from "react";

export default function NavBar() {
    return (
        <>
        <nav>
            <ul className="flex space-x-4">
            <li><Link href={'/'} className="text-gray-600 hover:text-gray-800">Home</Link></li>
            <li><Link href={'/sobre'} className="text-gray-600 hover:text-gray-800">Sobre</Link></li>
            <li><Link href={'/dicas'} className="text-gray-600 hover:text-gray-800">Dicas</Link></li>
            </ul>
        </nav>
        </>
    )
}