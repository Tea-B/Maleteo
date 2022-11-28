export const deleteCookie = (cookieName) => {
    document.cookie = cookieName + '=; Max-Age=0;';
}