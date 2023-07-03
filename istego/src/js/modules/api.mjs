const URL = {
    urlToken: 'https://edu.strada.one/api/user',
    urlDataProfile: 'https://edu.strada.one/api/user/me',
    urlHistoryMessages: 'https://edu.strada.one/api/messages/',
};

const API_METHOD = {
    get: 'GET',
    post: 'POST',
    patch: 'PATCH',
};

import { getCookie } from './ckookie.mjs';
import { showHidePreload } from './help-functions.mjs';

// запрос для получение токена
async function getToken(url, email) {
    try {
        showHidePreload('flex');

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ email }),
        });

        const answer = await response.json();

        if (response.status === 200) {
            console.log(answer);

            return { status: 'true', answer };
        } else {
            console.log('ошибка', answer);
            console.log(response.status);

            return { status: 'false' };
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    } finally {
        showHidePreload('none');
    }
}

// запрос для авторизации
async function confirmationAuthorization(url) {
    try {
        showHidePreload('flex');

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                Authorization: `Bearer ${getCookie('token')}`,
            },
        });

        const answer = await response.json();

        if (response.status === 200) {
            console.log(answer);

            return { status: 'true', answer };
        } else {
            console.log('ошибка', answer);
            console.log(response.status);

            return { status: 'false', answer };
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    } finally {
        showHidePreload('none');
    }
}

// запрос на смену имени
async function renameNickname(url, name) {
    try {
        showHidePreload('flex');

        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                Authorization: `Bearer ${getCookie('token')}`,
            },
            body: JSON.stringify({ name }),
        });

        const answer = await response.json();

        if (response.status === 200) {
            console.log(answer);

            return { status: 'true', answer };
        } else {
            console.log('ошибка', answer);
            console.log(response.status);

            return { status: 'false', answer };
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    } finally {
        showHidePreload('none');
    }
}

// запрос для получения истории сообщений
async function getHistoryMessages(url, value = null) {
    try {
        showHidePreload('flex');

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                Authorization: `Bearer ${getCookie('token')}`,
            },
        });

        const answer = await response.json();

        if (response.status === 200) {
            console.log(answer);
            return { status: 'true', answer };
        } else {
            console.log('ошибка', answer);
            console.log(response.status);

            return { status: 'false', answer };
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    } finally {
        showHidePreload('none');
    }
}

// Получить код, смена имени
async function getDataServer(url, method, moreHeader = null, value = null) {
    try {
        showHidePreload('flex');

        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                Authorization:
                    moreHeader !== null ? `Bearer ${getCookie('token')}` : null,
            },
            body: value !== null ? JSON.stringify(value) : null,
        });

        const answer = await response.json();
        if (response.status === 200) {
            console.log(answer);

            return { status: 'true', answer };
        } else {
            console.log('ошибка', answer);
            console.log(response.status);

            return { status: 'false', answer };
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    } finally {
        showHidePreload('none');
    }
}

export {
    URL,
    API_METHOD,
    getToken,
    confirmationAuthorization,
    renameNickname,
    getHistoryMessages,
    getDataServer,
};
