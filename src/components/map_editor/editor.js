import React, {useState} from 'react';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';
// internal
import {
  ParkingGrid,
} from 'components';
import style from './style.module.css';


/**
 * Effect to keep a map state with a valid default value
 * @return {array} The map and a callback to change it
 */
function useMap() {
  const defaultLayout = [[], [], [], [], []];
  defaultLayout.forEach((row, rowIdx) => {
    for (let i=0; i<5; i++) {
      defaultLayout[rowIdx].push({
        id: 'grass',
        orientation: 'north',
      });
    }
  });
  const defaultMap = {layout: defaultLayout, name: {es: '', en: ''}};
  const [map, setMap] = useState(defaultMap);
  return [map, setMap];
}


/**
 * Uses the API to send the map to storage
 * @param {object} map The map to be saved
 */
function sendMap(map) {

}


/**
 * Executes the callback on a new version of the map
 * @param {object} edited The updated map
 * @param {function} setMap Callback to set the map
 */
function onEdit(edited, setMap) {
  const newMap = Object.assign({}, edited);
  setMap(newMap);
}


/**
 * Event hanlder for the map name input
 * @param {object} e The evenet object
 * @param {object} map The current map object
 * @param {function} setMap Callback to set the map
 */
function onNameChange(e, map, setMap) {
  const newName = {
    es: e.target.value,
    en: e.target.value,
  };
  setMap({...map, name: newName});
}


/**
 * Fixed-size Parking grid.
 * @component
 * @return {React.Component}
 */
export default function MapEditor({
  tilesById,
}) {
  const {formatMessage} = useIntl();
  const [map, setMap] = useMap();

  return (
    <div id={style.editor}>
      <div id={style.input}>
        <label htmlFor='new-map-name'>
          {formatMessage({id: 'parkings.nameInput'})}
        </label>
        <input placeholder='. . .'
          id='new-map-name'
          value={map.name.es}
          onChange={(e) => onNameChange(e, map, setMap)}/>
      </div>
      <ParkingGrid tilesById={tilesById}
        map={map}
        editable={true}
        onEdit={(d) => onEdit(d, setMap)}/>
      <button onClick={() => sendMap(map)}>
        {formatMessage({id: 'parkings.save'})}
      </button>
    </div>
  );
}

MapEditor.propTypes = {
  map: PropTypes.shape({
    name: PropTypes.object,
    layout: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string,
              orientation: PropTypes.oneOf([
                'north', 'east', 'south', 'west',
              ]),
              tile_img: PropTypes.string,
            }),
        ),
    ),
  }),
  tilesById: PropTypes.object,
  editable: PropTypes.bool,
  onEdit: PropTypes.func,
};
