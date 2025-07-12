type props = {
    link: string
    texto: string
    className?: string
}

export default function MenuItem({link, texto, className}: props) {

    return (
        <>
            <a href={link} className={`${className}`}>{texto}</a>
        </>
    );
}