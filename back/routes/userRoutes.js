const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { createReport } = require('../controllers/reportController');
const router = express.Router();
const authMiddleware = require('../middleware/auth')

router.post('/register', registerUser);

router.post('/login', loginUser);

module.exports = router;