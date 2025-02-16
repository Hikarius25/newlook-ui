import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:10000",
    headers: {
        "Content-Type": "application/json",
    },
});

// Hàm để refresh token
const refreshAccessToken = async () => {
    try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post("http://localhost:10000/auth/refresh", { refreshToken });
        localStorage.setItem("token", response.data.access_token);
        return response.data.access_token;
    } catch (error) {
        console.error("Refresh token failed:", error);
        localStorage.clear();
        window.location.href = "/login";
        return null;
    }
};

// Interceptor cho request
API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

API.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            const newToken = await refreshAccessToken();
            if (newToken) {
                error.config.headers.Authorization = `Bearer ${newToken}`;
                return API.request(error.config); 
            }
        }
        return Promise.reject(error);
    }
);

export default API;
