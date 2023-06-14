import { differenceInYears, differenceInDays, differenceInHours } from "date-fns";
import { ELEMENTS } from "./ui.js";

function animateCountup(element, targetValue) {
	return new Promise((resolve) => {
		let value = 0;

		const animation = setInterval(() => {
			if (value === targetValue) {
				clearInterval(animation);
				resolve();
				return;
			}

			value++;
			element.textContent = value;
			flag = true;
		}, 15);
	});
}

async function calculateTime(date) {
	const currentDate = new Date();
	const targetDate = new Date(date);

	if (currentDate > targetDate) {
		return;
	}

	const yearsDiff = differenceInYears(targetDate, currentDate);
	const daysDiff = differenceInDays(targetDate, currentDate) % 365;
	const hoursDiff = differenceInHours(targetDate, currentDate) % 24;

	await animateCountup(ELEMENTS.DATE.HOUR, hoursDiff);
	await animateCountup(ELEMENTS.DATE.DAY, daysDiff);
	await animateCountup(ELEMENTS.DATE.YEAR, yearsDiff);
}

ELEMENTS.BUTTON.addEventListener("click", () => {
	const enteredDate = ELEMENTS.INPUT.value;
	if (!enteredDate) {
		return;
	}
	calculateTime(enteredDate);
});
