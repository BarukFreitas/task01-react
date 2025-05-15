import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Image from 'next/image'

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
  

export default function Galeria() {
  return (
    <>
    <Header />
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {imagens.map(({ src, alt, nome }, index) => (
            <div key={index} className="flex flex-col items-center">
                <div className="relative w-full h-64">
                <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
                </div>
                <p className="mt-2 text-center font-medium">{nome}</p>
            </div>
        ))}
    </main>
    <Footer />
    </>
  )
}
