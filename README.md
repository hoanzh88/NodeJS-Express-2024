# NodeJs

## 1 Khởi Tạo Project & router basic
### 1.1. Khởi Tạo Project
```
npm init -y
```

### 1.2. Cài Đặt Các Package
```
npm install express
```

### 2. Tổ Chức Cấu Trúc Dự Án
```
multi-route-express/
├── src/
│   ├── routes/v1/
│   │   ├── auth.js
│   │   ├── product.js
│   │   ├── brand.js
│   │   ├── index.js
│   ├── index.js
├── Dockerfile
└── .dockerignore
````

### 3. Viết example router express
```
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```
## Sử dụng Nodemon cho Chế Độ Dev
```
npm install --save-dev nodemon
npm run dev
```
## Tạo Middleware Xác Thực Token
```
npm install mysql2 dotenv
```

## Tạo Permission
### Tạo Bảng Quyền Truy Cập
```
-- Bảng chứa các quyền truy cập
CREATE TABLE permissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL
);

-- Bảng chứa quyền truy cập của người dùng
CREATE TABLE user_permissions (
  user_id INT NOT NULL,
  permission_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (permission_id) REFERENCES permissions(id),
  PRIMARY KEY (user_id, permission_id)
);

INSERT INTO permissions (name) VALUES ('view_products'), ('create_products');
INSERT INTO user_permissions (user_id, permission_id) VALUES (1, 1);
```

### Kiểm Tra Quyền Truy Cập Trong Middleware permission.helper.js


### Apply vào router


## tách biệt các logic xử lý ( folder services )
### 
```
npm install redis
```

### 2. Tạo File RedisService.js Trong Folder services

### Sử Dụng RedisService Trong Các Phần Khác Của Ứng Dụng