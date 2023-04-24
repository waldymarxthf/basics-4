const selects = document.querySelectorAll(".select");

selects.forEach((select) => {
  const current = select.querySelector(".current");
  const options = select.querySelector(".options");

  current.addEventListener("click", () => options.classList.toggle("disabled"));

  options.addEventListener("click", (event) => {
    if (event.target.classList.contains("option")) {
      current.textContent = "";

      const option = event.target;
      const newCurrent = option.cloneNode(true);

      current.appendChild(newCurrent);
      options.classList.add("disabled")
    }
  });
});
