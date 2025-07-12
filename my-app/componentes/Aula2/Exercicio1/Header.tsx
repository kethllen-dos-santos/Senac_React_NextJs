type props = {
    titulo: string
    subtitulo?: string
}

export default function Header({titulo, subtitulo}: props) {

    return (
    <>
        <header className="bg-violet-400 text-white text-center py-5 mb-7">
            <p className="font-bold text-3xl">{titulo}</p>
            <h2>{subtitulo}</h2>
        </header>
    </>
    );
}