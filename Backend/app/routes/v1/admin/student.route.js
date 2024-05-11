const router = require('express').Router();
const isAuth = require('../../../middlewares/isAuth');
const clientController = require('../../../controllers/admin/client.controller');
const jwt = require('jsonwebtoken');
const studentController = require('../../../controllers/admin/student.controller');
 router.post('/create', isAuth, studentController.create);
 router.post('/update', isAuth, studentController.update);
 router.get('/getstudents', isAuth, studentController.getAllStudents);
 router.post('/delete', isAuth, studentController.deleteStudent);

module.exports = router;