import {API_URLS} from "@/components/api/api-urls";
import axios from "axios";

const LOGIN_URL = API_URLS.login;
export const login = (email: string, password: string) => {
    const loginForm = {email, password}
    return axios.post(`${LOGIN_URL}`, loginForm, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};
