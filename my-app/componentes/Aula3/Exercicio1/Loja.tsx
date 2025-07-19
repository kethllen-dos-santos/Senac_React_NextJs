import Botao from "./Botao";
import Card from "./Card";
import Menu from "./Menu";

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

export default async function Loja() {

    const resposta = await fetch("https://fakestoreapi.com/products")
    const dados: props[] = await resposta.json()

    return(
        <>
            <Menu>
                <div className="flex flex-wrap gap-5">
                    {dados.map((item) => (
                        <div key={item.id}>
                            <Card className="w-96 h-96">
                                <div className="flex justify-center">
                                    <img src={item.image} className="h-56"/>
                                </div>

                                <h3>{item.title}</h3>
                                <p className="text-gray-400">{item.category}</p>
                                <p className="text-emerald-500 font-bold">$ {item.price}</p>
                                <p>{item.description}</p>
                                <Botao cor="amarelo" titulo="Ver mais" funcao={vazia}/>
                            
                            </Card>
                        </div>
                    ))}
                </div>
            </Menu>
        </>
    );
}