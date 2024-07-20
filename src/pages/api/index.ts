import type { APIRoute } from "astro"
import csvToJSON from "convert-csv-to-json"

export const POST: APIRoute = async ({ request }: { request: Request }) => {
	const formData = await request.formData()
	const file = formData.get("file")

	if (!file) return new Response(JSON.stringify({ message: "Failed to upload file", status: 500 }))

	if (file.type !== "text/csv") return new Response(JSON.stringify({ message: "Invalid mime type", status: 500 }))
	
	const fileContents = await file.text()

	console.log(fileContents)

	console.log(csvToJSON.fieldDelimiter(";").getJsonFromCsv(fileContents))

	return new Response(JSON.stringify({ message: "" }))
}
