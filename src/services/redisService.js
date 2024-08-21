const redis = require('redis');

// Tạo Redis client khi ứng dụng khởi động
let client;

const connectRedis = async () => {
  if (!client) {
    client = redis.createClient({
      url: 'redis://localhost:6379'
    });

    // Lắng nghe các sự kiện
    client.on('connect', () => {
      console.log('Connected to Redis');
    });

    client.on('error', (err) => {
      console.error('Redis error:', err);
    });

    // Kết nối đến Redis
    await client.connect();
  }

  return client;
};

// Hàm để lưu giá trị vào cache
const setCache = async (key, value, expiration = 3600) => {
  try {
    const client = await connectRedis();
    await client.setEx(key, expiration, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting cache:', error);
    throw error;
  }
};

// Hàm để lấy giá trị từ cache
const getCache = async (key) => {
  try {
    console.log('Fetching cache...');
    const client = await connectRedis();
    const value = await client.get(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error getting cache:', error);
    throw error;
  }
};

// Hàm để xóa cache
const deleteCache = async (key) => {
  try {
    const client = await connectRedis();
    await client.del(key);
  } catch (error) {
    console.error('Error deleting cache:', error);
    throw error;
  }
};

module.exports = {
  setCache,
  getCache,
  deleteCache,
};
