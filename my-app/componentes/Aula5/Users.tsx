import Botao from "@/componentes/Aula5/Botao";
import Link from "next/link";

export default async function Users() {

    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users`)
    const dados: userProps[] = await resposta.json();

    return (

        <div className="">
            {dados.map((item) => (
                <div key={item.id}>

                    <div className="flex bg-gray-900 text-white mb-3 p-3 w-1/4">

                        <div className="w-4/5">
                            <p className="font-bold">Id: {item.id}</p>
                            <p>Nome: {item.name}</p>
                            <p>E-mail: {item.email}</p>
                        </div>

                        <div>
                            <Link href={`/editarUsuario/${item.id}`}>
                                <Botao className="w-20" cor="azul" titulo="Editar"/>
                            </Link>
                            <br/>
                            <Botao className="w-20" cor="vermelho" titulo="Excluir"/>
                        </div>

                    </div>

                </div>
            ))}
        </div>
    );
}