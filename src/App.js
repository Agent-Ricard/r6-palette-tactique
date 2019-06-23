import React, { useState } from 'react';
import DrawingBoard from './DrawingBoard';
import MAPS from './maps';
import Toolbar from './Toolbar';

const DEFAULT_SETTINGS = {
  color: 'red',
  size: 5,
};

const App = () => {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  return (
    <div className={'App'}>
      <h1>R6S Palette tactique</h1>
      <Toolbar settings={settings} onSettingsChanged={setSettings} />
      <DrawingBoard map={MAPS.PRESIDENTIAL_AIRPLANE[1]} settings={settings} />
    </div>
  );
};

export default App;
