import axios from "axios";
import router from "@/router";

// Create instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request: add token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response: handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Unauthorized or token expired
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        router.push("/login");
      }
      // You can handle other status codes globally here
      return Promise.reject(error.response.data || { message: "Server Error" });
    } else if (error.request) {
      return Promise.reject({ message: "No response from server" });
    } else {
      return Promise.reject({ message: error.message });
    }
  }
);

export default api;
