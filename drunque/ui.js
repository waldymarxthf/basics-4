const buttons = document.querySelectorAll(".button");

buttons.forEach((mainButton) => {
  mainButton.addEventListener("click", () => {
    buttons.forEach((button) => {
      if (button !== mainButton) {
        button.classList.remove("button-active");
      }
    });
    if (mainButton !== restartButton) {
      mainButton.classList.add("button-active");
    }
  });
});
