import Link from "next/link";
import Botao from "./Botao";
import Card from "./Card";

type props = {
    id: number,
    image: string,
    title: string,
    category: string,
    price: number,
    description: string
}

function vazia () {
    
}

export default async function PaginaInicial() {

    const resposta = await fetch("https://fakestoreapi.com/products")
    const dados: props[] = await resposta.json()

    return(

        <div className="flex flex-wrap gap-5 m-5 h-sreen">
            {dados.map((item) => (
                <div key={item.id}>
                    <Card className="w-96 h-full">
                        <div className="flex justify-center">
                            <img src={item.image} className="h-56"/>
                        </div>

                        <h3>{item.title}</h3>
                        <p className="text-gray-400 bord">{item.category}</p>
                        <p className="text-emerald-500 font-bold mb-2">$ {item.price}</p>
                        <p className=" mt-2 mb-3 line-clamp-2 flex-1">{item.description}</p>
                        <Link href={`/aula4/produto/${item.id}`}><Botao className="mt-auto" cor="vermelho" titulo="Ver mais"/></Link>
                    
                    </Card>
                </div>
            ))}
        </div>
    );
}