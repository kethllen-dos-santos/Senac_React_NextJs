type Pessoa = {
    nome: string
    idade: number
}

export default function MeuComponente({nome, idade}: Pessoa) {
    return (
        <>
            <h1>{nome} tem {idade} anos.</h1>
        </>
    );
}