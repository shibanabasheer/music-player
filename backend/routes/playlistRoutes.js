const express = require('express');
const {
  createPlaylist,
  getPlaylists,
  getSongsByPlaylist,
  addSongToPlaylist,
} = require('../controllers/playlistController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Routes for creating and fetching playlists
router.route('/')
  .post(protect, createPlaylist)
  .get(protect, getPlaylists);

// Route to get songs by playlist ID
router.get('/:id/songs', protect, getSongsByPlaylist);

// Route to add a song to a playlist
router.post('/add-song', protect, addSongToPlaylist);

module.exports = router;



