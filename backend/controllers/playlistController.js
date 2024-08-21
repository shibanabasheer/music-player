const asyncHandler = require('express-async-handler');
const Playlist = require('../models/Playlist');
const Song = require('../models/Song');

// @desc Create a new playlist
// @route POST /api/playlists
// @access Private
const createPlaylist = asyncHandler(async (req, res) => {
  const { name, songs } = req.body;

  if (!name || !Array.isArray(songs)) {
    res.status(400);
    throw new Error('Please provide a valid playlist name and songs array');
  }

  const playlist = await Playlist.create({
    user: req.user._id,
    name,
    songs,
  });

  res.status(201).json(playlist);
});

// @desc Get all playlists for the logged-in user
// @route GET /api/playlists
// @access Private
const getPlaylists = asyncHandler(async (req, res) => {
  const playlists = await Playlist.find({ user: req.user._id }).populate('songs', 'title artist');
  res.json(playlists);
});

// @desc Get songs by playlist ID
// @route GET /api/playlists/:id/songs
// @access Private
const getSongsByPlaylist = asyncHandler(async (req, res) => {
  const songs = await Song.find({ playlist: req.params.id });
  res.json(songs.length ? songs : { message: 'Songs not found' });
});

// @desc Add a song to a playlist
// @route POST /api/playlists/add-song
// @access Private
const addSongToPlaylist = asyncHandler(async (req, res) => {
  const { playlistId, songId } = req.body;

  const playlist = await Playlist.findById(playlistId);
  if (!playlist) return res.status(404).json({ message: 'Playlist not found' });

  if (playlist.songs.includes(songId)) {
    return res.status(400).json({ message: 'Song already in playlist' });
  }

  playlist.songs.push(songId);
  await playlist.save();
  res.status(200).json({ message: 'Song added to playlist', playlist });
});

module.exports = {
  createPlaylist,
  getPlaylists,
  getSongsByPlaylist,
  addSongToPlaylist,
};
