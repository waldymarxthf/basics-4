import { el, dateUtils } from "./config.js";
import { intervalToDuration, formatDuration } from "date-fns";
import { ru } from "date-fns/locale";

el.dateInput.setAttribute("min", dateUtils.getCurrentDateISOString());

el.dateBtn.addEventListener("click", render);

el.dateInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") render(event);
});

function render(event) {
  event.preventDefault();
  const pastDate = new Date(el.dateInput.value);

  if (!el.dateInput.value) return;
  if (pastDate < dateUtils.getCurrentDate()) {
    el.dateInput.value = "";
    return;
  }

  const interval = intervalToDuration({
    start: dateUtils.getCurrentDate(),
    end: pastDate,
  });

  let format = ["years", "months", "days", "hours", "minutes"];

  if (interval.months) {
    format = ["months", "days", "hours"];
  }

  if (interval.years) {
    format = ["years", "months", "days"];
  }

  const formattedDuration = formatDuration(interval, {
    locale: ru,
    delimiter: " ",
    format,
  });

  el.countdownDisplay.classList.remove("load-save-data");
  el.countdownDisplay.textContent = formattedDuration;

  el.dateInput.value = "";
}
