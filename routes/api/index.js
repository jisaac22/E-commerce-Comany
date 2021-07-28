// require router 
const router = require('express').Router();

// requuires routes to use data
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

//router.use to send data for /api route
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes); 
router.use('/tags', tagRoutes);

module.exports = router;