import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <>
        <footer className="bg-gray-100 py-4 px-8 border-t border-gray-300 text-center text-gray-600 text-sm">
            <p>&copy; 2025 Meu Projeto. Todos os direitos reservados.</p>
            <nav className="mt-2">
                <ul className="flex justify-center space-x-4">
                <li><Link href={'/'} className="hover:underline">Termos de Serviço</Link></li>
                <li><Link href={'/'} className="hover:underline">Política de Privacidade</Link></li>
                </ul>
            </nav>
        </footer>
        </>
    )
}