export const UI_ELEMENTS = {
  FORM: document.querySelector('.app__form'),
  INPUT: document.querySelector('.form__input'),
  OUTPUT_YEAR: document.querySelector('.js-year'),
  OUTPUT_DAY: document.querySelector('.js-day'),
  OUTPUT_HOURS: document.querySelector('.js-hours'),
  OUTPUT_MOUNTH: document.querySelector('.js-mounth')
}

export function showInterval(date) {
  console.log(date);
  UI_ELEMENTS.OUTPUT_YEAR.textContent = date.years;
  UI_ELEMENTS.OUTPUT_DAY.textContent = date.days;
  UI_ELEMENTS.OUTPUT_HOURS.textContent = date.hours;
  UI_ELEMENTS.OUTPUT_MOUNTH.textContent = date.months;
}