const options = document.querySelector(".options");
const buttons = document.querySelectorAll(".options a");

options.addEventListener("click", (event) => {
  console.log(event.target.tagName)
  if (event.target.tagName !== "A") return;

  buttons.forEach((button) => button.classList.remove("active"));
  const button = event.target
  button.classList.add("active")
});
