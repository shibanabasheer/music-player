const asyncHandler = require('express-async-handler');
const Song = require('../models/Song');

// @desc Get all songs
// @route GET /api/songs
// @access Public
const getSongs = asyncHandler(async (req, res) => {
  const songs = await Song.find({});
  res.json(songs);
});

module.exports = { getSongs };


