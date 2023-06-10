
import {format } from 'date-fns';

function getElement(selector){
    return document.querySelector(selector);
}

const form = getElement(".form");
const dateInput = getElement(".form__input");
// const restNum = getElement(".rest__num");

function getDateNow(){
        return format(new Date(), 'yyyy-MM-dd');
}

function getDateInput(dateInput){
    return format(new Date(dateInput.value), 'yyyy-MM-dd');
}

function submitForm(event){
    event.preventDefault();
    console.log(getDateInput(dateInput) - getDateNow())
    
}

form.addEventListener('submit', submitForm)
