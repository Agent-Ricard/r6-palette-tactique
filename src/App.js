import React from 'react';
import DrawingBoard from './DrawingBoard';
import MAPS from './maps';
import './App.css';

const App = () => {
  return (
    <div className={'App'}>
      <h1>R6S Palette tactique</h1>
      <DrawingBoard map={MAPS.PRESIDENTIAL_AIRPLANE[1]} />
    </div>
  );
};

export default App;
