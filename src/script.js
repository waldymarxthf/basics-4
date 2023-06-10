import intervalToDuration from "date-fns/intervalToDuration";
import { UI_ELEMENTS } from "./ui_elements";

function clearInput() {
	UI_ELEMENTS.INPUT_DATE.value = "";
}

function renderDate(resultObj) {
	if (resultObj.months > 0) {
		const avgDay = 30.5;
		// eslint-disable-next-line no-param-reassign
		resultObj.days = Math.ceil(resultObj.months * avgDay + resultObj.days);
	}
	UI_ELEMENTS.RESULT_SCREEN.textContent = `${resultObj.years} years ${resultObj.days} days ${resultObj.hours} hours`;
}

function countdown() {
	const nowDate = new Date();
	const endDate = new Date(UI_ELEMENTS.INPUT_DATE.value);
	const result = intervalToDuration({
		start: nowDate,
		end: endDate,
	});
	renderDate(result);
}

UI_ELEMENTS.FORM.addEventListener("submit", (e) => {
	e.preventDefault();
	try {
		countdown();
	} catch (err) {
		UI_ELEMENTS.RESULT_SCREEN.textContent = "Enter date like in example";
	}
	clearInput();
});
