import { parseISO, intervalToDuration, format, compareAsc } from 'date-fns';
import { UI_ELEMENTS } from './ui';

function resetMinDateInput() {
  const strDateNow = format(new Date(), 'yyyy-MM-dd');
  UI_ELEMENTS.INPUT.setAttribute('min', strDateNow);
}

function comareDates(nowDate, endDate) {
  const result = compareAsc(nowDate, endDate);
  if (result > 0) {
    UI_ELEMENTS.OUTPUT_TITLE.textContent = 'Прошло';
    return;
  }
  UI_ELEMENTS.OUTPUT_TITLE.textContent = 'Осталось';
}

function showInterval({ years, months, days, hours, minutes }) {
  UI_ELEMENTS.OUTPUT_YEAR.textContent = years;
  UI_ELEMENTS.OUTPUT_DAY.textContent = days;
  UI_ELEMENTS.OUTPUT_HOURS.textContent = hours;
  UI_ELEMENTS.OUTPUT_MOUNTH.textContent = months;
  UI_ELEMENTS.OUTPUT_MINUTES.textContent = minutes;
}

function submitFormHandler(event) {
  event.preventDefault();
  const nowDate = new Date();
  const dateString = UI_ELEMENTS.INPUT.value;
  const endDate = parseISO(dateString);
  comareDates(nowDate, endDate);
  const result = intervalToDuration({
    start: nowDate,
    end: endDate,
  });
  showInterval(result);
  event.target.reset();
}

UI_ELEMENTS.FORM.addEventListener('submit', submitFormHandler);
document.addEventListener('DOMContentLoaded', resetMinDateInput);
