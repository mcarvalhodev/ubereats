import axios from "axios";
import { BASE_URL } from "../constants/urls";

class Client {
  headers = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  login = (body) => {
    return axios.post(`${BASE_URL}/login`, body);
  };

  signup = (body) => {
    return axios.post(`${BASE_URL}/signup`, body);
  };

  addAddress = (body) => {
    return axios.put(`${BASE_URL}/address`, body, this.headers);
  };

  getFullAddress = () => {
    return axios.get(`${BASE_URL}/profile/address`, this.headers);
  };

  getProfile = () => {
    return axios.get(`${BASE_URL}/profile`, this.headers);
  };

  updateProfile = (body) => {
    return axios.put(`${BASE_URL}/profile`, body, this.headers);
  };

  getRestaurants = () => {
    return axios.get(`${BASE_URL}/restaurants`, this.headers);
  };

  getRestaurantDetail = (id) => {
    return axios.get(`${BASE_URL}/restaurants/${id}`, this.headers);
  };

  placeOrder = (id, body) => {
    return axios.post(
      `${BASE_URL}/restaurants/${id}/order`,
      body,
      this.headers
    );
  };

  getActiveOrder = () => {
    return axios.get(`${BASE_URL}/active-order`, this.headers);
  };

  ordersHistory = () => {
    return axios.get(`${BASE_URL}/orders/history`, this.headers);
  };
}

export default Client;
