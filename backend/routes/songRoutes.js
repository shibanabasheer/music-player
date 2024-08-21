const express = require('express');
const { getSongs } = require('../controllers/songController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Route to get all songs
router.get('/', protect, getSongs);

module.exports = router;

