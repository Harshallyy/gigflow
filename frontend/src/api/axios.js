import axios from "axios";

const api = axios.create({
  baseURL: "https://gigflow-i55t.onrender.com",
  withCredentials: true,
});

export default api;
