import React from 'react';
import MAPS from './maps';

const MapSelector = ({ map, onMapChange, floor, onFloorChange }) => {
    const onMapChangeHandler = (mapName) => {
        console.log(mapName);
        const selectedMap = MAPS.find((map) => map.name === mapName);
        onMapChange(selectedMap);
    };
    const onFloorChangeHandler = (floorName) => {
        const selectedFloor = map.floors.find((floor) => floor.name === floorName);
        onFloorChange(selectedFloor);
    };
    const mapList = MAPS.map((map) => <option key={map.name} value={map.name}>{map.name}</option>);
    const floorList = map.floors.map((floor) => <option key={floor.name} value={floor.name}>{floor.name}</option>);
    
    if (!floor) {
        return (
            <div>
                <select value={map.name} onChange={onMapChangeHandler}>
                    {mapList}
                </select>
            </div>
        );
    }

    return (
        <div>
            <select value={map.name} onChange={(event) => onMapChangeHandler(event.target.value)}>
                {mapList}
            </select>
            <select value={floor.name} onChange={(event) => onFloorChangeHandler(event.target.value)}>
                {floorList}
            </select>
        </div>
    )
};

export default MapSelector;