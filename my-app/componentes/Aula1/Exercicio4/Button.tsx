type props = {
    className ?: string
    color: "azul" | "verde" | "vermelho"
    titulo: string
    funcao: () => void
}

export default function Button({className, color, titulo, funcao}:props) {
    let corBase = "";
    switch (color) {
        case "azul":
            corBase="bg-blue-500"
            break;
        case "verde":
            corBase="bg-green-500"
            break;
        case "vermelho":
            corBase="bg-red-500"
            break;
        default:
            break;
    }
    
    return (
    <>
        <button
            onClick={funcao}
            className={`${className} ${corBase} p-3 rounded-lg cursor-pointer text-white`}
        >
        {titulo}
        </button>
    </>
    );
}