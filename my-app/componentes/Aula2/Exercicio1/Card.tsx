type props = {
    titulo: string
    conteudo: string
}

export default function Card({titulo, conteudo}: props) {
    return (
    <>
        <article className="p-7 bg-white rounded-lg shadow-md w-1/4 h-60">
            <h1>{titulo}</h1>
            <p>{conteudo}</p>
        </article>
    </>
    );
}