type props = {
    link: string
    tipo: "pagina-atual" | "outra-pagina"
    texto: string
    className?: string
}

export default function MenuItem({link, tipo, texto, className}: props) {

    let negrito = ""

    if(tipo == "pagina-atual") {
        negrito = "font-black"
    }

    return (
        <>
            <a href={link} className={`${negrito} cursor-pointer  ${className}`}>{texto}</a>
        </>
    );
}