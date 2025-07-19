type props = {
    link: string
    texto: string
    tipo: "pagina-atual" | "outra-pagina"
}

export default function ItemMenu({link, texto, tipo}: props) {

    let negrito = ""
    let cor = "text-violet-100"

    if(tipo == "pagina-atual") {
        negrito = "font-black"
        cor = "text-white"
    }

    return (
        <>
            <a href={link} className={`${negrito} ${cor} hover:text-violet-700 cursor-pointer`}>{texto}</a>
        </>
    );
}