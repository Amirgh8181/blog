const url = process.env.BACKEND_SOURCE_URL as string

interface userDetails {
    email: string,
    password: string
}

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json()

        const req = await fetch(`${url}/api/auth`, {
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({ email, password })
        })

         return req;

    } catch (e) {
        return Response.json({ e })
    }
}