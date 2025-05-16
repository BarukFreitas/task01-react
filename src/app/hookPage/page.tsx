'use client';

import React from "react";
import useWindowSize from "../hooks/tamanhoJanela";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import useApi from "../hooks/useAPI";
import ImageGallery from "../hooks/galeriaImagens";

interface Post {
    id: number,
    title: string,
    body: string
}

const imagens = [
    {
      src: '/galeria/gelatina-frutas-vermelhas.jpg',
      alt: 'Gelatina de frutas vermelhas',
      nome: 'Gelatina de Frutas Vermelhas'
    },
    {
      src: '/galeria/gelatina-italia.png',
      alt: 'Gelatina Itália',
      nome: 'Gelatina Itália'
    },
    {
      src: '/galeria/mousse-morango.webp',
      alt: 'Mousse de Morango',
      nome: 'Mousse de Morango'
    },
    {
      src: '/galeria/pave.jpg',
      alt: 'Pavê tradicional',
      nome: 'Pavê Tradicional'
    },
    {
      src: '/galeria/bolo-de-rolo.jpg',
      alt: 'Bolo de Rolo',
      nome: 'Bolo de Rolo'
    },
    {
      src: '/galeria/sobremesa-morango.jpg',
      alt: 'Sobremesa de morango',
      nome: 'Sobremesa de Morango'
    },
    {
      src: '/galeria/tiramisu.webp',
      alt: 'Tiramisu',
      nome: 'Tiramisu'
    },
    {
      src: '/galeria/torta-limao.webp',
      alt: 'Torta de Limão',
      nome: 'Torta de Limão'
    },
    {
      src: '/galeria/torta-maracuja.jpg',
      alt: 'Torta de Maracujá',
      nome: 'Torta de Maracujá'
    }
  ];


export default function HookPage() {
    const {width, height} = useWindowSize()
    const {data: posts, loading, error} = useApi<Post[]>('https://jsonplaceholder.typicode.com/posts') //pode ser substituido por outra API

    return (
        <>
        <Header />
        <main className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Exemplo de Hooks</h1>
            <section className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">1º useWindowSize</h2>
                <p className="text-gray-700">Largura da janela: <span className="font-semibold">{width}px</span></p>
                <p className="text-gray-700">Altura da janela: <span className="font-semibold">{height}px</span></p>
                <p className="text-sm text-gray-500 mt-2">Redimensione a janela do seu navegador para ver os valores serem atualizados</p>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">2º useApi (Com JsonPlaceholder)</h2>
                {loading && <p className="text-gray-700">Carregando posts...</p>}
                {error && <p className="text-red-500">Erro ao carregar posts: {error}</p>}
                {posts && (
                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-gray-800">Lista de Posts: (Exemplos de API)</h3>
                        <ul>
                            {posts.slice(0, 5).map((post) => (
                                <li key={post.id} className="text-gray-700 mb-1">
                                    <span className="font-semibold">{post.title}</span> - {post.body.substring(0, 50)}...
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">ImageGallery</h2>
                <ImageGallery images={imagens} />
            </section>
            
        </main>
        <Footer />
        </>
    )
}