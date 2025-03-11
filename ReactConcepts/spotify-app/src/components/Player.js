import React, { useRef, useState } from 'react';
import './Player.css';

const Player = ({ currentSong }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };



  return (
    <div className="player">
      <h2>Now Playing: {currentSong ? currentSong.title : 'No song selected'}</h2>
      <audio ref={audioRef} src={currentSong?.url} />
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      
      </div>
    
  );
};

export default Player;