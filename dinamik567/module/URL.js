
export function getUrlRequest(cityName) {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = '780a47a1cb45ad6e579a4d19c7e710ce';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

    return url;
}

export async function getDateWidthServer(url) {


    const result = await fetch(url)
        .catch(() => alert('Ошибка'));

    const json = result.json();

    return json;
}