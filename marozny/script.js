import { differenceInDays, differenceInHours, differenceInYears } from 'date-fns';
import { UI_ELEMENTS } from './ui-elements.js';

function differenceInDate(date) {
	const currentDate = new Date();
	const inputDate = new Date(date);

	const years = differenceInYears(inputDate, currentDate);
	const days = differenceInDays(inputDate, currentDate) % 365;
	const hours = differenceInHours(inputDate, currentDate) % 24;

	createUI(years, days, hours);
}

function createUI(years, days, hours) {
	UI_ELEMENTS.DATE.YEAR.textContent = years;
	UI_ELEMENTS.DATE.DAY.textContent = days;
	UI_ELEMENTS.DATE.HOUR.textContent = hours;
}

UI_ELEMENTS.CALCULATE.addEventListener('click', () => {
	let userDate = UI_ELEMENTS.INPUT.value;
	UI_ELEMENTS.INPUT.value = '';
	differenceInDate(userDate);
});
