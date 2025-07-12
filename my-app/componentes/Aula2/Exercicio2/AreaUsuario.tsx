import Button from "@/componentes/Aula1/Exercicio4/Button";

type props = {
    titulo: string
    children: React.ReactNode
    tituloBotao: string
    acao: () => void
}

export default function AreaUsuario({titulo, children, tituloBotao, acao}: props) {
    return (
    <>
        <section className="h-screen flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-5 w-1/4">
                <h1 className="text-violet-600">{titulo}</h1>
                <p className="mb-3">{children}</p>
                <button className="bg-violet-600 text-white p-3 rounded-md cursor-pointer" onClick={acao}>{tituloBotao}</button>
            </div>
        </section>
    </>
    );
}