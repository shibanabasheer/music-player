This is a full-stack music player application built using the MERN (MongoDB, Express, React, Node.js) stack. Users can explore playlists, browse a song library, and play music directly within the app.

Features
User Authentication: Login and registration functionality.
Playlist Management: View playlists and the songs within them.
Song Library: Browse through a collection of available songs.
Music Player: Play, pause, and control music tracks.
Table of Contents
Features
Installation
Folder Structure
Usage
API Endpoints
Technologies Used
Contributing
License
Installation
Clone the repository:
git clone https://github.com/shibanabasheer/music-player.git
cd mern-music-player
Install the dependencies for both frontend and backend:

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
Set up your environment variables:
Create a .env file in the backend/ directory and include your MongoDB URI and JWT secret.
Example .env:

MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
Run the application:

# Run the backend server
cd backend
npm start

# Run the frontend
cd ../frontend
npm start
The backend will be running on http://localhost:5000 and the frontend on http://localhost:3000.

Folder Structure

mern-music-player/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── actions/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── reducers/
│   │   ├── screens/
│   │   ├── store.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── package.json
│
└── README.md
Usage
Register as a new user or log in with existing credentials.
Browse available playlists and explore the song library.
Select a playlist to view its songs and start playing music.
API Endpoints
User Routes
POST /api/users/login: Login a user.
POST /api/users/register: Register a new user.
Playlist Routes
GET /api/playlists: Get all playlists.
GET /api/playlists/
: Get a single playlist by ID.
Song Routes
GET /api/songs: Get all songs.
GET /api/songs/
: Get a single song by ID.
Technologies Used
Frontend: React, Redux, CSS
Backend: Node.js, Express
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
Contributing
Contributions are welcome! Please open an issue or submit a pull request if you would like to contribute to this project.

License
This project is licensed under the MIT License.