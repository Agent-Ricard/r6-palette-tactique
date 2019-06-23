import React from 'react';
import Color from './Color';

const Toolbar = ({ settings, onSettingsChanged }) => {  
    return (
        <div>
            <Color
                color={settings.color}
                onColorChanged={(color) => onSettingsChanged({...settings, color})}
            />
        </div>
    );
};

export default Toolbar;