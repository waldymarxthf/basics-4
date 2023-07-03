import { UI } from "./variables.mjs";

// Показать/Скрыть preload
function showHidePreload(display) {
    UI.preload.style.display = display;
}

// Рендер Имени в чате
function renderNicknameProfile(nickname) {
    UI.nickname.textContent = nickname;
}


export {showHidePreload, renderNicknameProfile};