import axios from 'axios';
const API_URL = import.meta.env.VITE_APP_API_URL;

export const searchUser = async (userData) => {
  return await axios
    .post(`${API_URL}/admin/searchUser`, userData)
    .catch((res) => res.response.data.msg);
};

export const deleteUser = async (userId) => {
  return await axios
    .delete(`${API_URL}/admin/${userId}`)
    .catch((res) => res.response.data.msg);
};

export const updateUserRole = async (role, id) => {
  try {
    const res = await axios.put(`${API_URL}/admin/${id}`, { role });
    return res;
  } catch (error) {
    throw error.response.data;
  }
};
