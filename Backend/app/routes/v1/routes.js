const express = require('express');
const router = express.Router();
const adminRoutes = require('./admin/adminRoutes');



router.use((req, res, next) => {    
    req.frontendUrl = false;
    req.currentDb = 'default';
   
    return next()
})

router.use('/admin', adminRoutes);


module.exports = router;