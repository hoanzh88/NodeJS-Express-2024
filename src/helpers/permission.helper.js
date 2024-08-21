const pool = require('../config/database');

const checkPermission = (requiredPermission) => {
    return (req, res, next) => {

        
    const userId = req.userId;
    console.log(userId);
    console.log(requiredPermission);

  pool.query(`
       SELECT p.name
       FROM user_permissions up
       JOIN permissions p ON up.permission_id = p.id
       WHERE up.user_id = ?
     `, [userId])
  .then(([rows]) => {
    console.error(rows);
    const userPermissions = rows.map((row) => row.name);
    console.log(userPermissions);
    if (userPermissions.includes(requiredPermission)) {
      next();
      } 
    else {
        res.status(403).json({ message: 'Forbidden: Insufficient permissions' }); // Người dùng không có quyền
      }
  })
  .catch((error) => {
    console.error(error);
    res.status(500).json({ message: 'Database query error.' });
  });
   
    };
  };
  
  module.exports = {
    checkPermission,
  };
  