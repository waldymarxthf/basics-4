import Cookies from 'js-cookie';
import axios from 'axios';


// Функция для сохранения кода в куки
export function saveCodeToCookie(code) {
  Cookies.set('code', code);
}

// Функция для получения кода из куки
export function getCodeFromCookie() {
  return Cookies.get('code');
}

//  PATCH-запрос на обновление имени пользователя
export async function updateUserName(newName) {
  try {
    const token = getCodeFromCookie();
    const headers = {
      Authorization: `Bearer ${token}` 
    };
    const data = {
      name: newName
    };

    const response = await patch('https://edu.strada.one/api/user', data, { headers });
    console.log('Имя пользователя обновлено:', response.data);
  } catch (error) {
    console.error('Ошибка при обновлении имени пользователя:', error);
  }
}

//  GET-запрос на получение данных о пользователе
export async function getUserData() {
  try {
    const token = getCodeFromCookie();
    const headers = {
      Authorization: `Bearer ${token}`
    };

    const response = await get('https://edu.strada.one/api/user/me', { headers });
    console.log('Данные о пользователе:', response.data);
  } catch (error) {
    console.error('Ошибка при получении данных о пользователе:', error);
  }
}
