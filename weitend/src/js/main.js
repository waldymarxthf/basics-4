import { isDate, formatDuration, intervalToDuration } from 'date-fns';
import { ELEMENTS } from './ui.js';
function getTimes(date) {
	date = new Date(date);
	if (isDate(date)) {
		const now = new Date()
		let duration = intervalToDuration({
			start: date,
			end: now,
		});
		const res = formatDuration(duration, { format: ["years", "days", "hours"]});

		console.log(res);
	};
};

function timeRender(dates) {
	console.log(dates.years);
	ELEMENTS.TIMER.YEARS.textContent = dates.years;
	ELEMENTS.TIMER.DAYS.textContent = dates.days;
	ELEMENTS.TIMER.HOURS.textContent = dates.hours;
}

ELEMENTS.FORM.BTN.addEventListener('click', (e) => {
	e.preventDefault();

	const date = ELEMENTS.FORM.INPUT.value;

	const dates = getTimes(date);
	timeRender(dates);
});