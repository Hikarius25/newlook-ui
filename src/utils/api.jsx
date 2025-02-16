import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:10000",
  withCredentials: true, 
});


api.interceptors.response.use(
  (response) => response, 
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        console.log("🔄 AccessToken hết hạn, đang refresh...");

        const refreshResponse = await axios.post("http://localhost:10000/auth/refresh", {
          refreshToken: localStorage.getItem("refreshToken"), 
        });

        const newAccessToken = refreshResponse.data.token;
        localStorage.setItem("accessToken", newAccessToken);


        error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return api.request(error.config);
      } catch (refreshError) {
        console.error("🚫 Refresh token thất bại, cần đăng nhập lại");

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login"; 
      }
    }

    return Promise.reject(error); 
  }
);

export default api;
