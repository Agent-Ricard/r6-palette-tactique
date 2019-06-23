import React, { useState, useEffect, useRef } from 'react';
import './DrawingBoard.css';

const DrawingBoard = ({ floor, settings }) => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [isErasing, setIsErasing] = useState(false);
    const canvasEl = useRef(null);

    // load the right image
    useEffect(() => {
        const ctx = canvasEl.current.getContext('2d');
        const img = new Image();
        if (!floor) {
            return;
        }
        img.src = floor.src;
        img.onload = () => { 
            canvasEl.current.width = img.width;
            canvasEl.current.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    }, [floor]);

    // draw with the mouse
    const onMouseMoveHandler = (event) => {
        if (isDrawing) {
            draw(event);
        }
        if (isErasing) {
            erase(event);
        }
    };
    const onMouseDownHandler = ({ button }) => {
        setIsDrawing(button === 0);
        setIsErasing(button === 2);
    };
    const onMouseUpHandler = () => {
        setIsDrawing(false);
        setIsErasing(false);
    }

    const draw = (event) => {
        const ctx = canvasEl.current.getContext('2d');

        const rect = canvasEl.current.getBoundingClientRect();
        const offsetX = rect.left;
        const offsetY = rect.top;
        ctx.fillStyle = settings.color;
        ctx.fillRect(event.clientX - offsetX, event.clientY - offsetY, settings.size, settings.size);
    };
    const erase = (event) => {
        const ctx = canvasEl.current.getContext('2d');

        const rect = canvasEl.current.getBoundingClientRect();
        const offsetX = rect.left;
        const offsetY = rect.top;
        ctx.clearRect(event.clientX - offsetX, event.clientY - offsetY, settings.size, settings.size);
    };

    return (
        <div className={'wrapper'}>
            <canvas
                ref={canvasEl}
                onMouseMove={onMouseMoveHandler}
                onMouseDown={onMouseDownHandler}
                onMouseUp={onMouseUpHandler}
            />
        </div>
    );
};

export default DrawingBoard;
      