import axios from 'axios';

const API_URL = process.env.BASE_URL || "http://127.0.0.1:8000/api";

const createApi = () => {
  return axios.create({
    baseURL: API_URL,
    timeout: 60000,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const api = createApi();

export default api;
