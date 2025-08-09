import Botao from "@/componentes/Aula5/Botao";
import Link from "next/link";
import Excluir from "./Excluir";

export default async function Users() {

    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users`)
    const dados: userProps[] = await resposta.json();

    return (
        <div className="h-screen">
            <div className="flex flex-wrap gap-10 justify-start">
                {dados.map((item) => (
                    <div key={item.id}>

                        <div className="flex bg-violet-100 text-black p-3 w-100 rounded-lg">

                            <div className="w-4/5">
                                <p className="font-bold">Id: {item.id}</p>
                                <p>Nome: {item.name}</p>
                                <p>E-mail: {item.email}</p>
                            </div>

                            <div>
                                <Link href={`/editarUsuario/${item.id}`}>
                                    <Botao className="w-20 py-1 mb-3" cor="azul" titulo="Editar"/>
                                </Link>
                                <br/>
                                <Excluir id={item.id}/>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}