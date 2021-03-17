import React, {useState} from 'react';
import PropTypes, {arrayOf} from 'prop-types';
// internal
import {
  ParkingTile,
} from 'components';
import style from './style.module.css';


/**
 * Tile hover callback to change the current focused cell.
 * @param {int} row The row index
 * @param {int} col The col index
 * @param {function} setFocused Callback to set the focused cell
 */
function onHover(row, col, setFocused) {
  if (row === null || col === null) {
    setFocused(null);
  } else {
    setFocused({row, col});
  }
}


/**
 * Cyles the tile type one further in the list and sets it in the map.
 * @param {object} map The current map
 * @param {object} focused An object with the focused row and column
 * @param {object} tilesById A mapping between tile ids and specs
 * @param {function} onEdit A callback to set the new map
 */
function onChangePrevClick(map, focused, tilesById, onEdit) {
  if (focused == null) {
    return;
  }
  const currentTile = map.layout[focused.row][focused.col];
  const currentTypeIdx = Object.keys(tilesById).indexOf(currentTile.id);
  const nextTypeIdx = (currentTypeIdx == 0 ?
    Object.keys(tilesById).length - 1 :
    (currentTypeIdx - 1) % Object.keys(tilesById).length);
  map.layout[focused.row][focused.col].id =
    Object.keys(tilesById)[nextTypeIdx];
  onEdit(map);
}


/**
 * Rotates the tile clock-wise and sets it in the map.
 * @param {object} map The current map
 * @param {object} focused An object with the focused row and column
 * @param {object} tilesById A mapping between tile ids and specs
 * @param {function} onEdit A callback to set the new map
 */
function onRotateClick(map, focused, tilesById, onEdit) {
  if (focused == null) {
    return;
  }

  const orientation2rotation = {
    'north': 0,
    'east': 1,
    'south': 2,
    'west': 3,
  };

  const currentTile = map.layout[focused.row][focused.col];
  const rotation = orientation2rotation[currentTile.orientation];
  const nextOrientation =
    Object.keys(orientation2rotation)[(rotation + 1) % 4];
  map.layout[focused.row][focused.col].orientation = nextOrientation;
  onEdit(map);
}


/**
 * Cyles the tile type one before in the list and sets it in the map.
 * @param {object} map The current map
 * @param {object} focused An object with the focused row and column
 * @param {object} tilesById A mapping between tile ids and specs
 * @param {function} onEdit A callback to set the new map
 */
function onChangeNextClick(map, focused, tilesById, onEdit) {
  if (focused == null) {
    return;
  }
  const currentTile = map.layout[focused.row][focused.col];
  const currentTypeIdx = Object.keys(tilesById).indexOf(currentTile.id);
  const nextTypeIdx = (currentTypeIdx + 1) % Object.keys(tilesById).length;
  map.layout[focused.row][focused.col].id = Object.keys(tilesById)[nextTypeIdx];
  onEdit(map);
}

/**
 * Fixed-size Parking grid.
 * @component
 * @return {React.Component}
 */
export default function ParkingGrid({
  map,
  tilesById,
  editable,
  onEdit,
}) {
  const [focused, setFocused] = useState(null);
  const gridCssClasses = [
    style.grid,
    editable === true ? style.editable : '',
  ].join(' ');

  const orientation2rotation = {
    'north': 0,
    'east': 1,
    'south': 2,
    'west': 3,
  };

  const rows = map.layout.map((row, rowIdx) =>
    <div key={rowIdx} className={style.row}>
      {row.map((tile, tileIdx) => {
        const tileData = {...tile, ...tilesById[tile.id]};
        const rotation = orientation2rotation[tileData.orientation];
        tileData.efec_entry = (tileData.entry + rotation) % 3;
        tileData.efec_exit = (tileData.exit + rotation) % 3;

        return <ParkingTile
          onMouseEnter={() => onHover(rowIdx, tileIdx, setFocused)}
          key={`${rowIdx}-${tileIdx}`}
          tile={tileData}/>;
      })
      }
    </div>,
  );

  const menuStyle = {
    display: (editable === true && focused !== null) ? 'flex' : 'none',
    top: focused == null ? '0px' : `${128 * focused.row}px`,
    left: focused == null ? '0px' : `${128 * focused.col}px`,
  };

  return (
    <div className={gridCssClasses}
      onMouseLeave={() => onHover(null, null, setFocused)}>
      <div id={style.menu} style={menuStyle}>
        <button onClick={
          () => onChangePrevClick(map, focused, tilesById, onEdit)
        }>
          🢦
        </button>
        <button onClick={
          () => onRotateClick(map, focused, tilesById, onEdit)
        }>
          ↷
        </button>
        <button onClick={
          () => onChangeNextClick(map, focused, tilesById, onEdit)
        }>
          🢧
        </button>
      </div>
      {rows}
    </div>
  );
}

ParkingGrid.propTypes = {
  map: PropTypes.shape({
    name: PropTypes.object,
    layout: arrayOf(
        arrayOf(
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
