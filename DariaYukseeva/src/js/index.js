import { intervalToDuration, formatDuration, formatDistanceStrict } from "date-fns";
import { ru } from "date-fns/locale";

const input = document.querySelector(".date");
const btn = document.querySelector(".btn");
const resultNode = document.querySelector(".result");

function getQuantityOfDays(obj) {
	let daysQuantity = obj.days;
	if (obj.months > 0) {
		const averageQuantityOfDaysInMonth = 30.4;
		daysQuantity = Math.ceil(obj.months * averageQuantityOfDaysInMonth + obj.days);
	}
	return daysQuantity;
}

function getDurationObj(customDate) {
	const durationObj = intervalToDuration({
		start: new Date(customDate),
		end: new Date(),
	});
	let durationInDays = getQuantityOfDays(durationObj);
	console.log(durationInDays);
	// const daysInYear = 365;
	// if (durationInDays > daysInYear) {
	// 	durationInDays -= daysInYear;
	// }
	// durationInDays = durationInDays > daysInYear ? daysInYear : durationInDays - daysInYear;
	durationObj.days = durationInDays;
	console.log(durationObj);
	return durationObj;
}

function render(result) {
	resultNode.textContent = result;
}

function getDuration(obj) {
	const duration = formatDuration(
		obj,
		{ format: ["years", "days", "hours"], locale: ru },
		{ delimiter: ", " },
	);
	return duration;
}

function showResult(date) {
	const durationObj = getDurationObj(date);
	const duration = getDuration(durationObj);
	render(duration);
}

const btnHandler = (event) => {
	event.preventDefault();
	const customDate = input.value.split("-").join(", ");
	showResult(customDate);
};

btn.addEventListener("click", btnHandler);
