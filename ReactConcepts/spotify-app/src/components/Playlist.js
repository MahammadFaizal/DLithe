import React from 'react';
import './Playlist.css';

const Playlist = ({ songs, onSelectSong }) => {
  return (
    <div className="playlist">
      <h2>Playlist</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id} onClick={() => onSelectSong(song)}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;