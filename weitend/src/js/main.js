import  { isDate, differenceInYears  }  from 'date-fns';
import { countdown } from 'countdown';
import { ELEMENTS } from './ui.js';

function getTimes(date) {
    date = new Date(date);
	if (isDate(date)) {

	};
};

function timeRender() {

}

ELEMENTS.FORM.BTN.addEventListener('click', (e) => {
	e.preventDefault();

	const date = ELEMENTS.FORM.INPUT.value;

	getTimes(date);
	timeRender();
});