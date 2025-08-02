import banco from '@/app/api/database'

export async function GET(request: Request, {params}: {params: {id: string}}) {
    
    const {id} = params;

    const [rows] = await banco.query("SELECT * FROM users WHERE id = ?", [id])

    return new Response(JSON.stringify(rows), {
        status: 200,
        headers: {'Content-Type': 'application/json'}
    })
}