import axios from "axios";

const API_URL = "http://localhost:4000";


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
