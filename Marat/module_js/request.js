import Cookies from 'js-cookie';
import axios from 'axios';

const url1 = "https://edu.strada.one/api/user";
const url2 = "https://edu.strada.one/api/user/me";

// Функция для отправления кода на почту
export async function codeToEmail(event){
    event.preventDefault();
    const email = document.querySelector(".autorisation").value;
    console.log(email);
    try {
        const response = await fetch('https://edu.strada.one/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Код отправлен на почту')
        }
        else {
            console.log('Запрос откланен');
        }
    } catch (error) {
        console.error('Error: ', error)
    }
}
export async function checkToken(token) {
    try {
        const response = await fetch(url2, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        if(!response.ok) {
            throw new Error("Неверный код");
        }

        return response.json();
    } catch (e) {
        console.log(e.message);
        return false;
    }
}

export async function changeName(name, token) {
    try {
        const response = await fetch(url1, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({name})
        });

        
        console.log(response.json());
    } catch (error) {
        console.log(error.message)
        
    }
}


