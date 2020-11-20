import axios from 'axios';
import { Enum } from './Enum';

class AuthService {
    login(username, password){
        return axios
            .post(`${Enum.API_URL}${Enum.SIGN_IN}`, { username, password })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }
    logout () {
        localStorage.removeItem("user");
    }

    register (fullname, username, email, password) {
        return axios.post(`${Enum.API_URL}${Enum.SIGN_UP}`, {
            fullname,
            username,
            email,
            password,
        });
    }
}


export default new AuthService();