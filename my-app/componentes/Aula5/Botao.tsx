"use client"

type props = {
    className ?: string
    cor: "azul" | "roxo" | "amarelo" | "vermelho"
    titulo: string
}

function vazio() {}

export default function Botao({className, cor, titulo}:props) {
    let corBase = "";
    switch (cor) {
        case "azul":
            corBase="bg-blue-500"
            break;
        case "roxo":
            corBase="bg-violet-500"
            break;
        case "amarelo":
            corBase="bg-amber-400"
            break;
        case "vermelho":
            corBase="bg-red-700"
            break;
        default:
            break;
    }
    
    return (
    <>
        <button
            className={`${className} ${corBase} p-2 rounded-lg cursor-pointer text-white hover:brightness-90`}
        >
        {titulo}
        </button>
    </>
    );
}