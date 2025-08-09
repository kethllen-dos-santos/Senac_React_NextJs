export async function Salvar (form: userProps, metodo: string) {

    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/users`, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
    })

    const dados: userProps[] = await resposta.json();
}