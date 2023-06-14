import { formatDuration, intervalToDuration, isFuture } from "date-fns";
import { PastDateError } from "./error";

const form = document.querySelector("form");
const dateInput = form.querySelector(`input[type="date"]`);
const resultNode = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  resultNode.classList.remove("error")

  const userDate = new Date(dateInput.value);

  if (!isFuture(userDate)) {
    const errorMessage = "The date is in the past"
    resultNode.classList.add("error")
    resultNode.textContent = errorMessage;
    throw new PastDateError(errorMessage)
  }

  const duration = intervalToDuration({
    start: userDate,
    end: new Date(),
  });

  const result = formatDuration(duration);
  resultNode.textContent = result;
});
