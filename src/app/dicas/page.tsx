import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

export default function Dicas() {
    return (
        <>
        <Header/>
        <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Dicas e Truques de Culinária</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Substituições Inteligentes</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Não tem ovos? Para algumas receitas, você pode usar purê de maçã ou banana amassada.</li>
            <li>Ficou sem fermento? Uma mistura de bicarbonato de sódio e vinagre pode funcionar em algumas situações.</li>
            <li>Quer uma opção sem lactose? Leite de amêndoas, soja ou coco são ótimos substitutos para o leite de vaca.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Técnicas Essenciais</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Aprenda a emulsionar molhos para dar uma textura suave e homogênea.</li>
            <li>Dominar o ponto correto de cocção das carnes faz toda a diferença no sabor.</li>
            <li>A técnica de "mise en place" (organizar os ingredientes antes de começar) agiliza o preparo.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Conservação de Alimentos</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Ervas frescas duram mais se armazenadas na geladeira em um recipiente com água, como um buquê.</li>
            <li>Alimentos cozidos devem esfriar completamente antes de serem refrigerados para evitar a proliferação de bactérias.</li>
            <li>Congele frutas maduras para usar em smoothies ou outras preparações futuras.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Medidas e Conversões</h2>
          <p className="text-gray-700 mb-2">Lembre-se que 1 xícara de farinha de trigo geralmente pesa cerca de 120 gramas.</p>
          <p className="text-gray-700 mb-2">Para converter graus Celsius para Fahrenheit, use a fórmula: °F = (&deg;C × 9/5) + 32.</p>        </section>
        </main>
        <Footer/>
        </>
    )
}