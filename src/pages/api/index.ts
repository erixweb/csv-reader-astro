import type { APIRoute } from "astro"

export const POST: APIRoute = ({ request }: { request: Request }): Response => {

    console.log(request.body)
    return new Response(JSON.stringify({ message: "" }))
}