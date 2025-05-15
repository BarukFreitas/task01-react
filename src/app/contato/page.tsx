import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

export default function Contato() {
    return (
        <>
        <Header />
        <main className="p-4 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">Fale Conosco</h1>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Nome" className="border p-2" />
              <input type="email" placeholder="Email" className="border p-2" />
              <textarea placeholder="Mensagem" className="border p-2"></textarea>
              <button className="bg-blue-600 text-white p-2 rounded">Enviar</button>
            </form>
        </main>
        <Footer />
        </>
    )

}