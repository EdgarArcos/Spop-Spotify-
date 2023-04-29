import axios from "axios";


const API_URL = "http://localhost:4000";

export const makeRequest = async (endPoint) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/${endPoint}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// export const addListFetch = async () => {
//   return await axios.post(`${API_URL}/api/list/add`, newList);
// };


export const editImgFetch = async (data) => {
  return await axios.post(`${API_URL}/users/img`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};


