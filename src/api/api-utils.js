import axios from "axios";

export const makeRequest = async (endPoint) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/${endPoint}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
