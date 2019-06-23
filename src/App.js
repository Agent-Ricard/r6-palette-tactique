import React, { useState } from 'react';
import DrawingBoard from './DrawingBoard';
import MAPS from './maps';
import Toolbar from './Toolbar';

const DEFAULT_SETTINGS = {
  color: 'red',
};

const App = () => {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  return (
    <div className={'App'}>
      <h1>R6S Palette tactique</h1>
      <Toolbar settings={settings} onSettingsChanged={setSettings} />
      <DrawingBoard map={MAPS.PRESIDENTIAL_AIRPLANE[1]} color={settings.color} />
    </div>
  );
};

export default App;
