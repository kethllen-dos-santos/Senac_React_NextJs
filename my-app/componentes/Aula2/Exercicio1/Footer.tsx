type props = {
    ano: string
    nome: string
}

export default function Footer({ano, nome}: props) {

    return (
        <>
            <p className="bg-violet-200 text-violet-950 font-bold text-center p-5 fixed bottom-px w-screen">{`© ${ano} ${nome} - Todos os direitos reservados.`}</p>
        </>
    );
}