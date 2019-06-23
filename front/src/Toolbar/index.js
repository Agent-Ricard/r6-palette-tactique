import React from 'react';
import Color from './Color';
import BrushSize from './BrushSize';

const Toolbar = ({ settings, onSettingsChanged }) => {  
    return (
        <div>
            <Color
                color={settings.color}
                onColorChanged={(color) => onSettingsChanged({ ...settings, color })}
            />
            <BrushSize
                size={settings.size}
                onSizeChanged={(size) => onSettingsChanged({ ...settings, size })}
            />
        </div>
    );
};

export default Toolbar;