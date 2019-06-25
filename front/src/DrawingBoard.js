import React, { useState, useRef } from 'react';
import io from 'socket.io-client';
import styled from '@emotion/styled';

import useWindowSize from './utils/useWindowSize';

const socket = io('http://localhost:8000');

const Img = styled.img({
    position: 'absolute',
    top: 0,
    left: 0,
    maxWidth: '100%',
    maxHeight: '100%',
    backgroundSize: 'cover',
});
const Canvas = styled.canvas({
    position: 'absolute',
    top: 0,
    left: 0,
});

const fitDrawToCanvasSize = (data, rect) => {
    const width = rect.right - rect.left;
    const height = rect.bottom - rect.top;
    const x = data.x * width / data.width;
    const y = data.y * height / data.height;
    const updatedData = { ...data, x, y };
    console.log(width, height);
    return updatedData;
};
const DrawingBoard = ({ userId, floor, settings }) => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [isErasing, setIsErasing] = useState(false);
    const canvasEl = useRef(null);
    const windowSize = useWindowSize();

    socket.on('draw', (data) => {
        if (data.userId === userId) {
            return;
        }
        const rect = canvasEl.current.getBoundingClientRect();
        const updatedData = fitDrawToCanvasSize(data, rect);
        draw(updatedData);
    });
    socket.on('erase', (data) => {
        if (data.userId === userId) {
            return;
        }
        const rect = canvasEl.current.getBoundingClientRect();
        const updatedData = fitDrawToCanvasSize(data, rect);
        erase(updatedData);
    });

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
            width: rect.right - rect.left,
            height: rect.bottom - rect.top,
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
        <div>
            <Img src={floor.src} alt={floor} />
            <Canvas
                width={windowSize.innerWidth}
                height={windowSize.innerHeight}
                ref={canvasEl}
                onMouseMove={onMouseMoveHandler}
                onMouseDown={onMouseDownHandler}
                onMouseUp={onMouseUpHandler}
            />
        </div>
    );
};

export default DrawingBoard;
      