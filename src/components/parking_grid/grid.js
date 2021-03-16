import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
// internal
import {
  ParkingTile
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
  onEdit
}){
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

  const rows = map.layout.map((row, rowIdx) =>
    <div key={rowIdx} className={style.row}>
      {row.map((tile, tileIdx) => {
        const tileData = {...tile, ...tilesById[tile.id]};
        const rotation = orientation_to_rotation[tileData.orientation];
        tileData.efec_entry = (tileData.entry + rotation) % 3;
        tileData.efec_exit = (tileData.entry + rotation) % 3;

        return <ParkingTile key={`${rowIdx}-${tileIdx}`} tile={tileData}/>;
      })
      }
    </div>
  )

  return (
    <div className={gridCssClasses}>
      {rows}
    </div>
  )
}

ParkingGrid.propTypes = {
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