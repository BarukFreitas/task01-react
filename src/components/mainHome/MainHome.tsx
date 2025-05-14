import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Receita {
    id: string,
    imagem: string,
    descricao: string,
    link: string,
    detalhe: {
        ingredientes: string[],
        cobertura?: string[],
        modoPreparo: string[]
    }
}

let receitas: Receita[] = [
    {
        id: 'bolo-de-cenoura',
        imagem: '/bolo-de-cenoura.jpg',
        descricao: 'Delicioso bolo de cenoura fofinho.',
        link: '/',
        detalhe: {
            ingredientes: [
                '3 cenouras médias (cerca de 250g) raspadas',
                '4 ovos grandes',
                '1 xícara (240ml) de óleo vegetal',
                '2 xícaras (400g) de açúcar',
                '2 xícaras (280g) de farinha de trigo',
                '1 colher de sopa de fermento em pó'
            ],
            cobertura: [
                '4 colheres de sopa de chocolate em pó',
                '2 colheres de sopa de manteiga',
                '1 xícara (240ml) de leite',
                '4 colheres de sopa de açúcar'
            ],
            modoPreparo: [
                'Preaqueça o forno a 180°C (temperatura média). Unte e enfarinhe uma forma redonda com furo central (cerca de 24 cm de diâmetro).',
                'No liquidificador, adicione as cenouras raspadas, os ovos e o óleo. Bata bem até obter uma mistura homogênea.',
                'Em uma tigela grande, misture o açúcar e a farinha de trigo.',
                'Despeje a mistura do liquidificador sobre os ingredientes secos e mexa delicadamente com um fouet ou colher até incorporar tudo.',
                'Adicione o fermento em pó e misture suavemente.',
                'Despeje a massa na forma preparada e leve ao forno preaquecido por cerca de 35 a 45 minutos, ou até que um palito inserido no centro saia limpo.',
                'Enquanto o bolo assa, prepare a cobertura (se desejar). Em uma panela, misture o chocolate em pó, a manteiga, o leite e o açúcar. Leve ao fogo baixo, mexendo sempre, até ferver e engrossar um pouco.',
                'Retire o bolo do forno e espere amornar antes de desenformar. Cubra com a cobertura de chocolate (se usar).'
            ]
        }
    },
    {
        id: 'mousse-de-chocolate',
        imagem: '/mousse-de-chocolate.jpg',
        descricao: 'Mousse de chocolate cremosa e irresistível.',
        link: '/',
        detalhe: {
            ingredientes: [
                '200g de chocolate meio amargo picado',
                '3 ovos (gemas e claras separadas)',
                '1/4 de xícara (50g) de açúcar',
                '1 caixa (200g) de creme de leite'
            ],
            modoPreparo: [
                'Derreta o chocolate picado em banho-maria ou no micro-ondas, mexendo de vez em quando até ficar liso. Reserve.',
                'Em uma tigela, bata as gemas com o açúcar até obter um creme claro e fofo.',
                'Adicione o chocolate derretido ao creme de gemas e misture bem.',
                'Incorpore o creme de leite delicadamente à mistura de chocolate.',
                'Em outra tigela, bata as claras em neve até ficarem firmes.',
                'Incorpore delicadamente as claras em neve à mistura de chocolate, fazendo movimentos suaves de baixo para cima para não perder a aeração.',
                'Divida a mousse em taças individuais ou em um recipiente maior.',
                'Leve à geladeira por pelo menos 2 horas para firmar antes de servir. Você pode decorar com raspas de chocolate ou frutas vermelhas.'
            ]
        }
    },
    {
        id: 'salada-de-frutas',
        imagem: '/salada-de-frutas.jpg',
        descricao: 'Salada de frutas fresca e nutritiva.',
        link: '/',
        detalhe: {
            ingredientes: [
                '1 manga madura picada',
                '1/2 mamão papaia picado',
                '1 xícara de morangos picados',
                '1 banana prata picada',
                '1 laranja descascada e em gomos',
                '1 xícara de uvas (verdes ou roxas) cortadas ao meio (se forem grandes)',
                'Suco de 1/2 limão (opcional, para evitar que as frutas escureçam)',
                'Folhas de hortelã fresca para decorar (opcional)'
            ],
            modoPreparo: [
                'Lave bem todas as frutas.',
                'Pique as frutas maiores em pedaços de tamanho similar. Corte os morangos e a banana em rodelas ou pedaços menores. Retire as sementes do mamão e pique a polpa. Descasque a laranja e separe os gomos. Corte as uvas ao meio, se forem grandes.',
                'Em uma tigela grande, misture delicadamente todas as frutas picadas.',
                'Se desejar, regue com o suco de limão para ajudar a manter a cor das frutas e adicionar um toque cítrico.',
                'Leve à geladeira por pelo menos 30 minutos para ficar bem fresca antes de servir.',
                'Decore com folhas de hortelã fresca, se desejar.'
            ]
        }
    }
]

export default function MainHome() {
    return (
        <>
        <div className="grid grid-cols-1 gap-8 p-4">
            {receitas.map((receita) => (
                <div key={receita.id} className="border rounded-md shadow-md overflow-hidden">
                    <Link href={receita.link}>
                        <div>
                            <div className="relative w-full h-64">
                                <Image src={receita.imagem} alt={receita.descricao} layout="fill" objectFit="cover" />
                            </div>
                            <div className="p-4 flex-col rounded-md mt-4">
                                <p className="text-md mb-2 text-gray-700 text-center font-semibold">{receita.descricao}</p>
                                <hr className="mb-4" />
                                <div className="text-gray-900 text-left">
                                    <h3 className="font-semibold text-lg mb-2">Ingredientes:</h3>
                                    <ul className="list-disc pl-5 mb-4">
                                        {receita.detalhe.ingredientes.map((ingrediente, index) => (
                                            <li key={index}>{ingrediente}</li>
                                        ))}
                                    </ul>
                                    {receita.detalhe.cobertura && (
                                        <>
                                            <h3 className="font-semibold text-lg mb-2">Cobertura:</h3>
                                            <ul className="list-disc pl-5 mb-4">
                                                {receita.detalhe.cobertura.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                    <h3 className="font-semibold text-lg mb-2">Modo de Preparo:</h3>
                                    <ol className="list-decimal pl-5">
                                        {receita.detalhe.modoPreparo.map((passo, index) => (
                                            <li key={index} className="mb-2">{passo}</li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
        </>
    )
}