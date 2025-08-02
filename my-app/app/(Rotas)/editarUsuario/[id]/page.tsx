import Formulario from "@/componentes/Aula5/Formulario";

export default async function EditarUsuario ({params}: {params: Promise<{id: string}>}){

    const {id} = await params
    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users/${id}`)
    const dados: userProps = await resposta.json();
    

    return (
        <div>
            <h1>Editar Usuário</h1>
            <Formulario/>
        </div>
        
    );
}