const express = require('express');
const clientRoute = require('./client.route');
const studentRoute=require('./student.route');
const router = express.Router();

 router.use('/client', clientRoute);
 router.use('/student', studentRoute);


module.exports = router;
