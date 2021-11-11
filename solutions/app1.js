const setCookie = (value = '') => {
    const now = new Date();
    now.setTime(now.getTime() + 900000);
    const expires = now.toUTCString();
    document.cookie = `token=${value};expires=${expires};path=/`
}

export default setCookie;

