import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

export default function Sobre() {
    return (
        <>
        <Header/>
        <main>
        <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Sobre Nós</h1>
        <p className="text-lg text-gray-700 mb-4">
          Bem-vindo ao nosso cantinho de receitas deliciosas e fáceis de preparar!
          Somos apaixonados por culinária e acreditamos que todos podem se aventurar na cozinha.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Nosso objetivo é compartilhar receitas testadas e aprovadas, desde clássicos da culinária
          até novidades saborosas, para inspirar você a cozinhar para si mesmo, sua família e amigos.
        </p>
        <p className="text-lg text-gray-700">
          Esperamos que você encontre aqui a receita perfeita para cada ocasião!
        </p>
      </main>
        </main>
        <Footer/>
        </>
    )
}