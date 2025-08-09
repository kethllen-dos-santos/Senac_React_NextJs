import banco from '@/app/api/database'

export async function GET(request: Request) {

    // const users = [
    //     {id:1, name:"rafael"},
    //     {id:2, name:"vinicius"},
    // ]

    try {
        const [rows] = await banco.query("SELECT * FROM users")

        return new Response(JSON.stringify(rows), {
            status: 200,
            headers: {'Content-Type': 'application/json'} // Para formatação do navegador
        });
    } catch (error) {
        return new Response(JSON.stringify({erro: error}), {
            status: 500
        });
    }
}


export async function POST(request: Request) {
    const {name, email} = await request.json();
    const [resultado] = await banco.query("INSERT INTO users (name, email) VALUES (?,?)", [name, email])
    
    return new Response(JSON.stringify(resultado), {
        status: 201,
        headers: {'Content-Type': 'application/json'}
    });
}


export async function PUT(request: Request, {params}: {params: {id: string}}) {
    const {id, name, email} = await request.json()

    await banco.query("UPDATE users SET name=?, email=? WHERE id=?", [name, email, id])

    return new Response(JSON.stringify({valor: true})) // return Response.json({valor: true})
}


export async function DELETE(request: Request) {
    const {id} = await request.json()

    await banco.query("DELETE FROM users WHERE id=?", [id])

    return new Response(JSON.stringify({valor: true})) // return Response.json({valor: true})
}
