import { createEl } from "./config.js";

export const createAppTimeTill = (data = {}) => {
  const today = new Date("YYYY.MM.DD");
  const countdownApp = createEl("div");
  const dateLabel = createEl("div");
  const dateInputContainer = createEl("form");
  const dateInput = createEl("input");
  const dateBtn = createEl("button");
  const countdownTitle = createEl("div");
  const countdownDisplay = createEl("div");

  countdownApp.classList.add("countdown-app");
  dateLabel.classList.add("date-label");
  dateInputContainer.classList.add("date-input-container");
  dateInput.classList.add("date-input");
  dateBtn.classList.add("date-btn");
  countdownTitle.classList.add("countdown-title");
  countdownDisplay.classList.add("countdown-display", "load-save-data");

  dateLabel.textContent = "Введите дату";
  dateBtn.textContent = "Посчитать";
  dateInput.value = today;
  countdownTitle.textContent = "Осталось времени:";
  countdownDisplay.textContent = "00";

  dateInputContainer.append(dateInput);
  dateInputContainer.append(dateBtn);

  countdownApp.append(dateLabel);
  countdownApp.append(dateInputContainer);
  countdownApp.append(countdownTitle);
  countdownApp.append(countdownDisplay);

  return countdownApp;
};
