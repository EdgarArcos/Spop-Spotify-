import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const auth0loginRequest = async (userData) => {
  return await axios
    .post(`${API_URL}/users/auth0login`, userData)
    .catch((res) => res.response.data.msg);
};

export const editImgFetch = async (userData) => {
  return await axios
    .post(`${API_URL}/users/img`, userData)
    .catch((res) => res.response.data.msg);
};

export const editUsernameFetch = async (userData) => {
  return await axios
    .post(`${API_URL}/users/username`, userData)
    .catch((res) => res.response.data.msg);

};
