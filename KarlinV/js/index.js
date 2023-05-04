import { getData } from "./fetch.js";
import { render } from "./render.js";

const form = document.querySelector("form");
const err = "Поле не должно быть пустым, введите запрос и повторите попытку!";

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const firstName = form["firstName"];

  if (!firstName.value.trim()) {
    render(err);

    return;
  }

  try {
    const data = await getData(firstName.value);

    if (data.gender === null) {
      throw new Error(
        "Имя не найдено в списке имен, или невозможно определить пол для этого имени."
      );
    }

    render(data);
  } catch (error) {
    console.error(error);

    render(error.message);
  } finally {
    firstName.value = "";
  }
});
