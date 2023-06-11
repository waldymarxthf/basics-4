import { intervalToDuration, formatDuration, formatDistanceStrict } from "date-fns";
import { ru } from "date-fns/locale";

const input = document.querySelector(".date");
const btn = document.querySelector(".btn");
const resultNode = document.querySelector(".result");

function getQuantityOfDays(date) {
	const dateNow = Date.now();
	// const dateNow = new Date();
	const customDate = new Date(date).getTime();
	console.log(new Date(date));
	// const customDate = new Date(date);
	// let durationInDays = formatDistanceStrict(dateNow, customDate, {
	// 	unit: "day",
	// 	locale: ru,
	// });
	// durationInDays = parseInt(durationInDays, 10);
	const millisecondsInSecond = 1000;
	const secondsInDay = 86400;
	const durationInDays = (customDate - dateNow) / (millisecondsInSecond * secondsInDay);
	console.log(dateNow);
	console.log(customDate);
	return durationInDays;
}

function getDurationObj(customDate) {
	const durationObj = intervalToDuration({
		start: new Date(),
		end: new Date(customDate),
	});
	let durationInDays = getQuantityOfDays(customDate);
	console.log(durationInDays);
	const daysInYear = 365;
	if (durationInDays >= daysInYear && durationInDays > 0) {
		durationInDays %= daysInYear;
	}
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
