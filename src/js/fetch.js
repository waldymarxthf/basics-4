export async function getCode() {
	const response = await fetch("https://edu.strada.one/api/user ", {
		method: "POST",
		// mode: "no-cors",
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify({ email: "starcenkoboris2@gmail.com" }),
	});
}
