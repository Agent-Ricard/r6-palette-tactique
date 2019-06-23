import React from 'react';

const SIZES = {
    SMALL: 5,
    MEDIUM: 10,
    LARGE: 15,
};

const BrushSize = ({ size, onSizeChanged }) => {
    return (
        <div>
            <h4>Brush size</h4>
            <label>
                <input
                    type={'radio'}
                    value={SIZES.SMALL}
                    onChange={() => onSizeChanged(SIZES.SMALL)}
                    checked={size === SIZES.SMALL}
                />
                Small
            </label>
            <label>
                <input
                    type={'radio'}
                    value={SIZES.MEDIUM}
                    onChange={() => onSizeChanged(SIZES.MEDIUM)}
                    checked={size === SIZES.MEDIUM}
                />
                Medium
            </label>
            <label>
                <input
                    type={'radio'}
                    value={SIZES.LARGE}
                    onChange={() => onSizeChanged(SIZES.LARGE)}
                    checked={size === SIZES.LARGE}
                />
                Large
            </label>
        </div>
    )
};

export default BrushSize;