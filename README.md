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