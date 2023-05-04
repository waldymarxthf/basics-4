const main = document.querySelector(".main");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const button = document.querySelector(".button");

const serverUrl = "https://api.genderize.io";

async function clickHundler(event) {
	event.preventDefault()

	const firstName = input.value;
	const url = `${serverUrl}?name=${firstName}`;

	const response = await fetch(url);
	let answer = await response.json();
	
	let answerNode = document.querySelector("div");
	answerNode.textContent = `${answer.name} is ${answer.gender}`;

	main.appendChild(answerNode)
}

button.addEventListener("click", clickHundler)