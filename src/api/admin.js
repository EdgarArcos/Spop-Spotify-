import axios from "axios";
const API_URL = "http://localhost:4000";

export const searchUser = async (userData) => {
    return await axios
      .post(`${API_URL}/admin/searchUser`, userData)
      .catch((res) => res.response.data.msg);
  };

export const deleteUser = async (userId) => {
  return await axios
  .delete(`${API_URL}/admin/${userId}`)
  .catch((res) => res.response.data.msg);
}