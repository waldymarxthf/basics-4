function setCookie(name, value, options = {}) {
    options = {
        path: "/",
        ...options
    }

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
    let updateCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updateCookie += ";" + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updateCookie += "=" + optionValue;
        }
    }
    document.cookie = updateCookie;
}
setCookie("user", "John", { secure: true, "max-age": 10 });
alert(document.cookie);
function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}
deleteCookie("user");
alert(document.cookie);
