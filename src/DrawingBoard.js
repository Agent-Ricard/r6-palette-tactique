import React, { useState, useEffect, useRef } from 'react';
import './DrawingBoard.css';

const DrawingBoard = ({ map, color }) => {
    const [isDrawing, setIsDrawing] = useState(false);
    const canvasEl = useRef(null);

    // load the right image
    useEffect(() => {
        const ctx = canvasEl.current.getContext('2d');
        const img = new Image();
        img.src = map;
        img.onload = () => { 
            canvasEl.current.width = img.width;
            canvasEl.current.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    }, [map]);

    // draw with the mouse
    const onMouseMoveHandler = (event) => {
      console.log(event.button);
    if (!isDrawing) {
        return;
      }
      const ctx = canvasEl.current.getContext('2d');

      const rect = canvasEl.current.getBoundingClientRect();
      const offsetX = rect.left;
      const offsetY = rect.top;
      ctx.fillStyle = color;
      console.log(color)
      ctx.fillRect(event.clientX - offsetX, event.clientY - offsetY, 5, 5);
    };
    return (
        <div className={'wrapper'}>
            <canvas
                ref={canvasEl}
                onMouseMove={onMouseMoveHandler}
                onMouseDown={(event) => setIsDrawing(event.button ===  0)}
                onMouseUp={() => setIsDrawing(false)}
            />
        </div>
    );
};

export default DrawingBoard;
      