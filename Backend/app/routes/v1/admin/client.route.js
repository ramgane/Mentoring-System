const router = require('express').Router();
const isAuth = require('../../../middlewares/isAuth');
const clientController = require('../../../controllers/admin/client.controller');
const jwt = require('jsonwebtoken');
 router.post('/create', isAuth, clientController.create);
 router.post('/login',clientController.login);
 router.post('/generatetoken',clientController.generatetoken);
 router.post('/sendemail',isAuth,clientController.sendEmail);
  

module.exports = router;