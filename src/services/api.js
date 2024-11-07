import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:7171/api", // Backend API base URL
});

export default api;
