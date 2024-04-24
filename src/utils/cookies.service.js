import Cookies from "js-cookie";

export const COOKIES = {
  AUTH_TOKEN: "authToken",
  USER_SETTINGS: "userSettings",
};

class CookieService {
  setCookie(name, value, options) {
    Cookies.set(name, value, { expires: 7, ...options });
  }

  getCookie(name) {
    return Cookies.get(name);
  }

  removeCookie(name) {
    Cookies.remove(name);
  }
}

const cookieService = new CookieService();
export default cookieService;
