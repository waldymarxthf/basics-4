const { intervalToDuration, formatDuration, format } = require("date-fns");
const { ru } = require("date-fns/locale");

const input = document.querySelector(".input");
const form = document.querySelector(".form");
const output = document.querySelector(".output");

const now = new Date();
const nextDay = now.setDate(now.getDate() + 1);
input.setAttribute("min", format(nextDay, "yyyy-MM-dd"));

function calcData(event) {
	event.preventDefault();

	if (!input.value) {
		output.textContent = "Дата не выбрана";
		return;
	}

	const duration = intervalToDuration({
		start: new Date(input.value),
		end: new Date(),
	});

	duration.hours -= 3;
	duration.minutes += 1;

	console.log(duration);

	const formatedDuration = formatDuration(
		duration,
		{ format: ["years", "months", "days", "hours", "minutes"], locale: ru },
		{ zero: true },
	);
	output.textContent = formatedDuration;
}

form.addEventListener("submit", calcData);
