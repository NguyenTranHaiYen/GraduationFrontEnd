import axios from "axios";
import authHeader from "./AuthHeader";
import { Enum } from './Enum';

class Service {

  getDistricts() {
    return axios.get(`${Enum.API_URL}${Enum.GET_DISTRICT}`);
  }

  getStreetsByDistrict(districtId) {
    return axios.get(`${Enum.API_URL}${Enum.GET_STREET}?districtid=${districtId}`);
  }

  register(fullname, username, email, password) {
    return axios.post(`${Enum.API_URL}${Enum.SIGN_UP}`, {
      fullname,
      username,
      email,
      password,
    });
  }

  createPost(formData) {
    return axios.post(`${Enum.API_URL}${Enum.CREATE_POST}`, formData);
  } 

  // getUserBoard() {
  //   return axios.get(`${Enum.API_URL}${}`, { headers: authHeader() });
  // }

  // getModeratorBoard() {
  //   return axios.get(`${Enum.API_URL}${}`, { headers: authHeader() });
  // }

  // getAdminBoard() {
  //   return axios.get(`${Enum.API_URL}${}`, { headers: authHeader() });
  // }
}

export default new Service();