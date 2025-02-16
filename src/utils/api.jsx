import axios from "axios";

// Tạo Axios instance
const api = axios.create({
  baseURL: "http://localhost:10000",
  withCredentials: true, // Quan trọng nếu backend yêu cầu cookie
});

// Thêm Interceptor để xử lý lỗi 401
api.interceptors.response.use(
  (response) => response, // Nếu response thành công, return như bình thường
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        console.log("🔄 AccessToken hết hạn, đang refresh...");
        // Gửi request để lấy token mới
        const refreshResponse = await axios.post("http://localhost:10000/auth/refresh", {
          refreshToken: localStorage.getItem("refreshToken"), // Lấy refreshToken từ storage
        });

        // Lưu accessToken mới
        const newAccessToken = refreshResponse.data.token;
        localStorage.setItem("accessToken", newAccessToken);

        // Gửi lại request cũ với token mới
        error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return api.request(error.config);
      } catch (refreshError) {
        console.error("🚫 Refresh token thất bại, cần đăng nhập lại");
        // Nếu refresh thất bại, logout người dùng
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login"; // Điều hướng về trang login
      }
    }

    return Promise.reject(error); // Trả lỗi về nếu không phải 401
  }
);

export default api;
