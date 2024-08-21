const pool = require('../config/database');
const { getCache, setCache } = require('./redisService');

const getAllProducts = async () => {
  try {
    const cacheKey = 'all_products';
    // Kiểm tra cache trước
    let products = await getCache(cacheKey);
    
    if (!products) {
      console.log('Fetching products from database...');
      // Nếu không có trong cache, lấy từ database
      const [result] = await pool.query('SELECT * FROM product LIMIT 10');
      products = result;

      // Lưu vào cache
      await setCache(cacheKey, products, 3600); // Cache trong 1 giờ
    }

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

module.exports = {
  getAllProducts,
};
