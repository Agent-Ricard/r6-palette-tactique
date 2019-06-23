import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './DrawingBoard.css';

const socket = io('http://localhost:8000');

const DrawingBoard = ({ userId, floor, settings }) => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [isErasing, setIsErasing] = useState(false);
    const canvasEl = useRef(null);

    socket.on('draw', (data) => {
        if (data.userId === userId) {
            return;
        }
        draw(data);
    });
    socket.on('erase', (data) => {
        if (data.userId === userId) {
            return;
        }
        erase(data);
    });

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
        if (!isDrawing && !isErasing) {
            return;
        }

        // format data before draw / erase
        const rect = canvasEl.current.getBoundingClientRect();
        const data = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
            size: settings.size,
            color: settings.color,
            userId,
        };

        if (isDrawing) {
            draw(data);
            socket.emit('draw', data);
        }
        if (isErasing) {
            erase(data);
            socket.emit('erase', data);
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

    const draw = (data) => {
        const ctx = canvasEl.current.getContext('2d');
        ctx.fillStyle = data.color;
        ctx.fillRect(data.x, data.y, data.size, data.size);
    };
    const erase = (data) => {
        const ctx = canvasEl.current.getContext('2d');
        ctx.fillStyle = data.color;
        ctx.clearRect(data.x, data.y, data.size, data.size);
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
      