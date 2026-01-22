import axios from "axios"

const axiosClient = axios.create({
  baseURL:'http://localhost:3000',

  // baseURL: 'https://codearena-backend-047h.onrender.com',

  // baseURL: isLocalhost 
  //      ? "http://localhost:3000" 
  //      : "https://codearena-backend-047h.onrender.com",
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default axiosClient;

