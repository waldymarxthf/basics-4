import { REQUEST_HEADER, REQUEST_METOD, SERVER_URL, USER_URL } from "./constants";

export async function getMailRequest(email) {
	try {
		const response = await fetch(SERVER_URL, {
			method: REQUEST_METOD.POST,
			headers: REQUEST_HEADER.DEFAULT_HEADER,
			body: JSON.stringify({ email }),
		});
		await response.json();
	} catch (error) {
		throw new Error(error.message);
	}
}

export async function changeNameRequest(name) {
	try {
		const response = await fetch(USER_URL, {
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
		const response = await fetch(USER_URL, {
			method: REQUEST_METOD.GET,
			headers: {
				...REQUEST_HEADER.DEFAULT_HEADER,
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
