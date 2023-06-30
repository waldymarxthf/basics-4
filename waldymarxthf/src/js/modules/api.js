import { validateEmail } from "./emailValidation";

const serverUrl = "https://edu.strada.one/api/user";

export async function getData(email) {
	try {
		if (!validateEmail(email)) {
			return;
		}

		const response = await fetch(serverUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify({ email }),
		});
		const result = await response.json();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}
