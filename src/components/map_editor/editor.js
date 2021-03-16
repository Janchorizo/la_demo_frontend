import React, {useState} from 'react';
import PropTypes, { arrayOf } from 'prop-types';
// internal
import {
  ParkingGrid
} from 'components';
import style from './style.module.css';


function useMap(){
  const defaultLayout = [[],[],[],[],[]];
  defaultLayout.forEach((row, rowIdx) => {
    for(let i=0; i<5; i++){
      defaultLayout[rowIdx].push({
        id: 'grass',
        orientation:'north',
      })
    }
  });
  const defaultMap = {layout: defaultLayout, name: {es:'', en:''}};
  const [map, setMap] = useState(defaultMap);
  return [map, setMap];
}


/**
 * Fixed-size Parking grid.
 * @component
 * @return {React.Component}
 */
export default function MapEditor({
  tilesById
}){
  const [map, setMap] = useMap();
  
  function onEdit(newMap){
    setMap(newMap);
  }

  function onNameChange(e) {
    const newName = {
      es: e.target.value,
      en: e.target.value,
    }
    setMap({...map, name: newName});
  }

  console.log(tilesById)

  return (
    <div id={style.editor}>
      <input value={map.name.es} onChange={onNameChange}/>
      <ParkingGrid tilesById={tilesById} map={map} editable={true} onEdit={onEdit}/>
    </div>
  )
}

MapEditor.propTypes = {
  map: PropTypes.shape({
    name: PropTypes.object,
    layout: arrayOf(
      arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          orientation: PropTypes.oneOf([
            'north', 'east', 'south', 'west'
          ]),
          tile_img: PropTypes.string,
        })
      )
    )
  }),
  tilesById: PropTypes.object,
  editable: PropTypes.bool,
  onEdit: PropTypes.func,
};