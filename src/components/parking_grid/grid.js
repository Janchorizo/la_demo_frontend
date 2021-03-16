import React, {useState} from 'react';
import PropTypes, {arrayOf} from 'prop-types';
// internal
import {
  ParkingTile,
} from 'components';
import style from './style.module.css';


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

  const orientation_to_rotation = {
    'north': 0,
    'east': 1,
    'south': 2,
    'west': 3,
  };

  function onHover(row, col) {
    if (row === null || col === null) {
      setFocused(null);
    } else {
      setFocused({row, col});
    }
  }

  function onChangePrevClick() {
    if (focused == null) {
      return;
    }
    const currentTile = map.layout[focused.row][focused.col];
    const currentTypeIdx = Object.keys(tilesById).indexOf(currentTile.id);
    const nextTypeIdx = (currentTypeIdx == 0 ?
      Object.keys(tilesById).length - 1 :
      (currentTypeIdx - 1) % Object.keys(tilesById).length);
    map.layout[focused.row][focused.col].id = Object.keys(tilesById)[nextTypeIdx];
    onEdit(map);
  }

  function onRotateClick() {
    if (focused == null) {
      return;
    }
    const currentTile = map.layout[focused.row][focused.col];
    const rotation = orientation_to_rotation[currentTile.orientation];
    const nextOrientation =
      Object.keys(orientation_to_rotation)[(rotation + 1) % 4];
    map.layout[focused.row][focused.col].orientation = nextOrientation;
    onEdit(map);
  }

  function onChangeNextClick() {
    if (focused == null) {
      return;
    }
    const currentTile = map.layout[focused.row][focused.col];
    const currentTypeIdx = Object.keys(tilesById).indexOf(currentTile.id);
    const nextTypeIdx = (currentTypeIdx + 1) % Object.keys(tilesById).length;
    map.layout[focused.row][focused.col].id = Object.keys(tilesById)[nextTypeIdx];
    onEdit(map);
  }

  const rows = map.layout.map((row, rowIdx) =>
    <div key={rowIdx} className={style.row}>
      {row.map((tile, tileIdx) => {
        const tileData = {...tile, ...tilesById[tile.id]};
        const rotation = orientation_to_rotation[tileData.orientation];
        tileData.efec_entry = (tileData.entry + rotation) % 3;
        tileData.efec_exit = (tileData.entry + rotation) % 3;

        return <ParkingTile
          onMouseEnter={() => onHover(rowIdx, tileIdx)}
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
      onMouseLeave={() => onHover(null, null)}>
      <div id={style.menu} style={menuStyle}>
        <button onClick={() => onChangePrevClick()}>
          🢦
        </button>
        <button onClick={() => onRotateClick()}>
          ↷
        </button>
        <button onClick={() => onChangeNextClick()}>
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
