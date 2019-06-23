import React, { useState, useRef } from 'react';
import img from './assets/maps/presidential-plane/1.jpg';
import './App.css';

const App = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasEl = useRef(null);
  const onMouseMoveHandler = (event) => {
    if (!isDrawing) {
      return;
    }
    console.log(event.screenX, event.screenY)
    const ctx = canvasEl.current.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(event.clientX, event.clientY, 5, 5);
  };
  return (
    <div className={'App'}>
      <h1>R6S Palette tactique</h1>
      <div className={'palette-container'}>
        <img
          src={img}
          alt={'test'}
          width={1920}
          height={1080}
        />
        <canvas
          width={1920}
          height={1080}
          ref={canvasEl}
          onMouseMove={onMouseMoveHandler}
          onMouseDown={() => setIsDrawing(true)}
          onMouseUp={() => setIsDrawing(false)}
        />
      </div>
    </div>
  );
};

export default App;
