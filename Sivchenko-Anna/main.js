const form = document.querySelector(".priority-container__form");
const list = document.querySelector(".priority-container");
const formInput = document.querySelector(".priority-container__form-input");

function clearInput() {
  formInput.value = "";
}

function addTask(event) {
  event.preventDefault();
  const newDiv = document.createElement("div");
  list.appendChild(newDiv);
  newDiv.classList.add("priority-container__task");
  newDiv.insertAdjacentHTML(
    "afterbegin",
    `<input type="checkbox" class="priority-container__checkbox"><p class=" priority-container__task-text">${formInput.value}</p><button class="priority-container__form-button" type="submit">
          <img src="./assets/close-icon.svg" alt="close-icon" class=" priority-container__delete">
        </button></div>`
  );
  clearInput();
}

form.addEventListener("submit", addTask);