const settingsButton = document.querySelector(".settings-button");
const settingsMenu = document.querySelector(".settings-menu");

settingsButton.addEventListener("click", () => {
	settingsMenu.showModal();
});

settingsMenu.addEventListener("click", (event) => {
	console.log(event.target);
	if (e.target === settingsMenu) {
		settingsMenu.close();
	}
});
