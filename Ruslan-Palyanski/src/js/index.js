
import { intervalToDuration, getTime} from 'date-fns';
import { storage } from './storage.js';

function getElement(selector){
    return document.querySelector(selector);
}

const form = getElement(".form");
const dateInput = getElement(".form__input");
const restNum = getElement(".rest__num");

function getDateNow(){
    return new Date();
}

function getDuration(startDate, endDate){
    return intervalToDuration({
                        start: startDate,
                        end: endDate
                    });
}

function getDateInput(dateInput){
    return new Date(dateInput.value);
}

function render(duration){
    restNum.innerText = duration;
}

function submitForm(event){
    event.preventDefault();
        storage.setDate(getTime(getDateInput(dateInput)));
        const startDate = getDateNow();
        const endDate = storage.getDate();
        const duration = getDuration(startDate, endDate);
        render(`${duration.years} years ${duration.months} months ${duration.days} days ${duration.hours} hours ${duration.minutes} minutes ${duration.seconds} seconds`);
}

form.addEventListener('submit', submitForm)

if(storage.getDate() || false){
    const startDate = getDateNow();
    const endDate = storage.getDate();
    const duration = getDuration(startDate, endDate);
    render(`${duration.years} years ${duration.months} months ${duration.days} days ${duration.hours} hours ${duration.minutes} minutes ${duration.seconds} seconds`);
} else {
    render('You must choose date');
}



