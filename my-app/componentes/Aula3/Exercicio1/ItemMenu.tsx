type props = {
    link: string
    texto: string
    tipo: "pagina-atual" | "outra-pagina"
}

export default function ItemMenu({link, texto, tipo}: props) {

    let tamanho = ""
    let negrito = ""
    let cor = "text-gray-400"

    if(tipo == "pagina-atual") {
        negrito = "font-black"
        tamanho = "text-lg"
        cor = "text-white"
    }

    return (
        <>
            <a href={link} className={`${negrito} ${cor} ${tamanho} hover:text-white cursor-pointer`}>{texto}</a>
        </>
    );
}