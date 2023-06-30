import { getCurrentTime } from './modules/dateUtils';
import { createMessage } from './modules/messageUtils';
import { getElement, appendElement, setElementValue, setScrollTop } from './modules/domUtils';

const messages = getElement('.messages');
const inputForm = getElement('.input-form');
const inputMessage = getElement('.input-field');
const url = 'https://edu.strada.one/api/user';
const email = 'my@email.com';

function render() {
	const date = getCurrentTime();
	const message = createMessage('KarinV', inputMessage.value, date, 'my');

	appendElement(messages, message);
	setElementValue(inputMessage, '');
	setScrollTop(messages, messages.scrollHeight);
}

inputForm.addEventListener('submit', e => {
	e.preventDefault();
	if (!inputMessage.value) return;

	render();
});

inputForm.addEventListener('keydown', e => {
	if (e.key === 'Enter') {
		e.preventDefault();
		render();
	}
});
