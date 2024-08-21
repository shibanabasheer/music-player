const express = require('express');
const {
  authUser,
  registerUser,
  getUserProfile,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// User authentication and registration routes
router.post('/login', authUser);
router.post('/register', registerUser);

// Route to get user profile (protected)
router.get('/profile', protect, getUserProfile);

module.exports = router;


