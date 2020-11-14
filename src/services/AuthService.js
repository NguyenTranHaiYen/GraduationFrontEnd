import axios from 'axios';
import { Enum } from './Enum';

const API_URL = 'http://localhost:8080/nhatro/';

function AuthService () {
    const login = (username, password) => {
        return axios
            .post(API_URL + Enum.SIGN_IN, { username, password })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }
    const logout = () => {
        localStorage.removeItem("user");
    }

    const register = (username, email, password) => {
        return axios.post(API_URL + Enum.SIGN_UP, {
            username,
            email,
            password,
        });
    }
}


export default new AuthService();