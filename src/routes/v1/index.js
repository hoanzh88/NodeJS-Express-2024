const express = require('express');

const router = express.Router({mergeParams: true});

router.route('/test-api')
    .get((req, res) => {
        res.send('Hello World - test-api!');
    });

router.use('/auth', require('./auth-routes'));
router.use('/product', require('./product-routes'));
router.use('/brand', require('./brand-routes'));

module.exports = router;