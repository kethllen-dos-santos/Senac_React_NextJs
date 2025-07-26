"use client"

type props = {
    className ?: string
    cor: "azul" | "roxo" | "amarelo"
    titulo: string
}

function vazio() {}

export default function Botao({className, cor, titulo}:props) {
    let corBase = "";
    switch (cor) {
        case "azul":
            corBase="bg-blue-600"
            break;
        case "roxo":
            corBase="bg-purple-600"
            break;
        case "amarelo":
            corBase="bg-amber-400"
            break;
        default:
            break;
    }
    
    return (
    <>
        <button
            onClick={vazio}
            className={`${className} ${corBase} p-3 rounded-lg cursor-pointer text-white`}
        >
        {titulo}
        </button>
    </>
    );
}