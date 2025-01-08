import { toast } from "react-toastify";

const TS_STYLE = {
    position: "top-right",
    theme: "dark",
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
}
const appName = "Hurleart"

export const appHeader = {
    title: appName + " - Digital Hub for Digital Artists"
}
export const loginHeader = {
    title: appName + " - Login",
}
export const signupHeader = {
    title: appName + " - Register",
}
export const loginCol = "col-xl-4 col-lg-5";

export const API_KEY = "4d6cb47058f9b39505f28eebacce1a12";
export const API_URL = "http://localhost:5700/api/v1";
export const IMG_URL = "https://image.tmdb.org/t/p";
export const COOKIE_NAME = "hurleart__cookiename";
export const COOKIE_PASSWORD = "ake#LACHI8899andChikabamdhkgmhkfgfnmkhmkfgmknompkpomidu";
export const successToast = (success) => toast.success(`${success}`, TS_STYLE);
export const errorToast = (error) => toast.error(`${error}`, TS_STYLE);