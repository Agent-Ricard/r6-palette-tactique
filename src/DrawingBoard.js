import React, { useState, useRef } from 'react';

const DrawingBoard = ({ map, color = 'red' }) => {
    const [isDrawing, setIsDrawing] = useState(false);
    const canvasEl = useRef(null);
    const onMouseMoveHandler = (event) => {
      if (!isDrawing) {
        return;
      }
      const ctx = canvasEl.current.getContext('2d');
      ctx.fillStyle = color;
      ctx.fillRect(event.clientX, event.clientY, 5, 5);
    };
    return (
        <div className={'palette-container'}>
            <img
                src={map}
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
    );
};

export default DrawingBoard;
      