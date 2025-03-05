import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Playlist from './components/Playlist';
import Player from './components/Player';
import TodoList from './components/TodoList';
import { songs } from './data';
import './App.css';

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <div className="left-panel">
          <Playlist songs={songs} onSelectSong={setCurrentSong} />
          <TodoList />
        </div>
        <div className="right-panel">
          <Player currentSong={currentSong} />
        </div>
      </div>
    </div>
  );
};

export default App;