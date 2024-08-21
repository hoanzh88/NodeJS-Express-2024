const pool = require('../config/database');

const verifyToken = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
 // authorization: Bearer YRTQz9XZBGk
  if (!token) {
    return res.status(401).json({ message: 'No token provided.' });
  }

  try {
    // Kiểm tra token trong cơ sở dữ liệu
    const [rows] = await pool.query('SELECT * FROM admin WHERE remember_token = ?', [token]);

    if (rows.length === 0) {
      return res.status(403).json({ message: 'Invalid or expired token.' });
    }
    req.userId = rows[0].id;
    console.log("user_id: " + req.userId);
    next();
  } catch (error) {
    console.error(error);
    res.status(403).json({ message: 'Failed to authenticate token.' });
  }
};

module.exports = {
  verifyToken,
};