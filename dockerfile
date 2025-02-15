# ---- Build Phase ----
    FROM node:18 AS builder

    # Tạo thư mục làm việc
    WORKDIR /app
    
    # Copy file package.json và package-lock.json
    COPY package.json package-lock.json ./
    
    # Cài đặt dependencies
    RUN npm install
    
    # Copy toàn bộ code vào container
    COPY . .
    
    # Build project (sẽ tạo thư mục "dist")
    RUN npm run build
    
    # ---- Serve Phase ----
    FROM nginx:alpine
    
    # Copy các file đã build vào Nginx để serve web
    COPY --from=builder /app/dist /usr/share/nginx/html
    
    # Mở cổng 80
    EXPOSE 80
    
    # Chạy Nginx
    CMD ["nginx", "-g", "daemon off;"]
    