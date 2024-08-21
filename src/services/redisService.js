const redis = require('redis');
const config = require('../../config');

// Tạo Redis client và kết nối đến Redis server
const client = redis.createClient({
  url: config.apps[0].redis.REDIS_URL
});

// Xử lý sự kiện kết nối
client.on('connect', () => {
  console.log('Connected to Redis');
});

// Xử lý sự kiện lỗi
client.on('error', (err) => {
  console.error('Redis error:', err);
});

// Hàm để lưu giá trị vào cache
const setCache = async (key, value, expiration = 3600) => {
  try {
    await client.setEx(key, expiration, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting cache:', error);
    throw error;
  }
};

// Hàm để lấy giá trị từ cache
const getCache = async (key) => {
  try {
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
