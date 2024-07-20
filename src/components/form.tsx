import type React from "preact/compat"
import { useState } from "preact/hooks"

export default function Form() {
	const [file, setFile] = useState<File | null>(null)

	async function handleSubmit(event: Event) {
		event.preventDefault()

		if (file) {
			const formData = new FormData()
			formData.append("file", file)

			console.log(formData.get("file"))
            
			const res = await fetch("/api/", {
				method: "POST",
				body: formData,
			})


			//const json = await res.json()
		}
	}

	async function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		const uploadedFile = event?.target?.files[0] ?? []

		if (uploadedFile) {
			setFile(uploadedFile)
            
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="file" name="file" accept=".csv" onChange={handleInputChange} />

			<button type="submit">Enviar</button>
		</form>
	)
}
