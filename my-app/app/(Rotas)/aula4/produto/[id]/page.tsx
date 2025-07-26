import Botao from "@/componentes/Aula4/Botao";
import Link from "next/link";

type produtoProps = {
    image: string,
    title: string,
    category: string,
    price: number,
    description: string
}

export default async function Produto({params}: {params: Promise<{id:string}>}) {
    const {id} = await params;

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const resposta = await fetch(`https://fakestoreapi.com/products/${id}`)
    const produto: produtoProps = await resposta.json();

    return (
        <div className="flex flex-col items-center justify-center p-7 h-screen bg-white">

            <div className="w-160">
                <div className="flex flex-col items-center">
                    <h1>{produto.title}</h1>
                    <img src={produto.image} className="w-80 m-7"/>
                </div>

                <div>
                    <p className="text-emerald-500 font-bold mb-2 text-xl">$ {produto.price}</p>
                    <p className="text-gray-400 mb-2">Categoria: {produto.category}</p>
                    <p className="mb-4">{produto.description}</p>
                    <Link href="/"><Botao className="" cor="amarelo" titulo="Voltar ao catálogo"/></Link>
                </div>
            </div>
        </div>
    );
}