import { REQUEST_HEADER, REQUEST_METOD } from "./constants";

const serverUrl = "https://edu.strada.one/api/user";
const url = "https://edu.strada.one/api/user";
const userUrl = "https://edu.strada.one/api/user/me";

export async function getMailRequest(email) {
	try {
		const response = await fetch(serverUrl, {
			method: REQUEST_METOD.POST,
			headers: REQUEST_HEADER.DEFAULT_HEADER,
			body: JSON.stringify({ email }),
		});
		await response.json();
	} catch (error) {
		console.error(error);
	}
}

export async function changeNameRequest(name) {
	try {
		const response = await fetch(url, {
			method: REQUEST_METOD.PATCH,
			headers: REQUEST_HEADER.AUTHORIZATION_HEADER,
			body: JSON.stringify({ name }),
		});
		if (!response.ok) {
			return false;
		}
		return await response.json();
	} catch (error) {
		throw new Error(error.message);
	}
}

export async function getUserDataRequest(token) {
	try {
		const response = await fetch(userUrl, {
			method: REQUEST_METOD.GET,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				Authorization: `Bearer ${token}`,
			},
		});

		if (!response.ok) {
			return false;
		}
		return await response.json();
	} catch (error) {
		throw new Error(error.message);
	}
}
