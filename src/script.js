import { UI_ELEMENTS } from "./ui_elements";

function clearInput() {
	UI_ELEMENTS.INPUT_DATE.value = "";
}

function countdown(countDownDate) {
	const now = new Date().getTime();
	const distance = countDownDate - now;
	// Эту часть кода я позаимствовал так как не сообразил как перевести из уникс форматав число
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let year = 0;
	if (days > 365) {
		year = Math.floor(days / 365);
		days %= 365;
	}
	UI_ELEMENTS.RESULT_SCREEN.innerHTML = `${year}years ${days}days ${hours}hours`;

	if (distance < 0) {
		UI_ELEMENTS.RESULT_SCREEN.innerHTML = "END";
	}
}

UI_ELEMENTS.FORM.addEventListener("submit", (e) => {
	e.preventDefault();
	const countDownDate = new Date(UI_ELEMENTS.INPUT_DATE.value).getTime();
	if (!countDownDate) {
		UI_ELEMENTS.RESULT_SCREEN.innerHTML = "Enter the date as shown in the example";
		clearInput();
	} else {
		countdown(countDownDate);
		clearInput();
	}
});
