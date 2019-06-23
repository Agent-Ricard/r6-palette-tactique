import React from 'react';

const COLORS = {
    RED: 'red',
    BLACK: 'black',
    BLUE: 'blue',
    GREEN: 'green',
    YELLOW: 'yellow',
};

const Color = ({ color, onColorChanged }) => {
    return (
        <div>
            <label>
                <input
                    type={'radio'}
                    value={COLORS.RED}
                    onChange={() => onColorChanged(COLORS.RED)}
                    checked={color === COLORS.RED}
                />
                Red
            </label>
            <label>
                <input
                    type={'radio'}
                    value={COLORS.BLACK}
                    onChange={() => onColorChanged(COLORS.BLACK)}
                    checked={color === COLORS.BLACK}
                />
                Black
            </label>
            <label>
                <input
                    type={'radio'}
                    value={COLORS.BLUE}
                    onChange={() => onColorChanged(COLORS.BLUE)}
                    checked={color === COLORS.BLUE}
                />
                Blue
            </label>
            <label>
                <input
                    type={'radio'}
                    value={COLORS.GREEN}
                    onChange={() => onColorChanged(COLORS.GREEN)}
                    checked={color === COLORS.GREEN}
                />
                Green
            </label>
            <label>
                <input
                    type={'radio'}
                    value={COLORS.YELLOW}
                    onChange={() => onColorChanged(COLORS.YELLOW)}
                    checked={color === COLORS.YELLOW}
                />
                Yellow
            </label>
        </div>
    )
};

export default Color;