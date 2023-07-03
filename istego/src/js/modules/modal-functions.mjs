import { UI_MODAL } from "./variables.mjs";

// Делегирование модалки нажатие на КРЕСТИК/ПУСТОЕ ПРОСТРАНСТВО
function modalDelegationClick(event) {
    if (
        event.target === UI_MODAL.btnModalClose ||
        event.target === UI_MODAL.modal
    ) {
        hideModal();
    }
}

function showModal() {
    UI_MODAL.modal.classList.add('show-modal');
}

function hideModal() {
    UI_MODAL.modal.classList.remove('show-modal');
}

export { modalDelegationClick, showModal, hideModal };
