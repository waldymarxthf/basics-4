import { differenceInYears, differenceInDays, differenceInHours } from "date-fns";
import { animateCountup } from "./animation";
import { ELEMENTS } from "./ui";

async function calculateTime(date) {
	const currentDate = new Date();
	const targetDate = new Date(date);

	if (currentDate > targetDate) {
		return;
	}

	const daysInYear = 365;
	const hoursInDay = 24;
	const yearsDiff = differenceInYears(targetDate, currentDate);
	const daysDiff = differenceInDays(targetDate, currentDate) % daysInYear;
	const hoursDiff = differenceInHours(targetDate, currentDate) % hoursInDay;

	await animateCountup(ELEMENTS.DATE.HOUR, hoursDiff);
	await animateCountup(ELEMENTS.DATE.DAY, daysDiff);
	await animateCountup(ELEMENTS.DATE.YEAR, yearsDiff);
}

function buttonClick() {
	const enteredDate = ELEMENTS.INPUT.value;
	if (!enteredDate) {
		return;
	}
	calculateTime(enteredDate);
}

ELEMENTS.BUTTON.addEventListener('click', buttonClick);