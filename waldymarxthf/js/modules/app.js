import { initializeUI } from "./ui.js";

export function initializeApp() {
	window.addEventListener('DOMContentLoaded', async () => {
		await initializeUI()
	})
}