import axios from "axios";

const api = axios.create({
  baseURL: "https://gigflow-1-7ms6.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
