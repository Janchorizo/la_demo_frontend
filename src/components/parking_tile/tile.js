import React from 'react';
import PropTypes from 'prop-types';
// internal
import style from './style.module.css';


/**
 * Fixed-size Parking tile.
 * @component
 * @return {React.Component}
 */
export default function ParkingTile({tile}){
  const angle = {
    'north': '0deg',
    'east': '90deg',
    'south': '180deg',
    'west': '270deg',
  }[tile.orientation];

  const tileStyle = {
    backgroundImage: `url(${tile.img_path})`,
    transform: `rotate(${angle})`,
  };

  return <div className={style.tile}
    style={tileStyle}/>
}

ParkingTile.propTypes = {
  tile: PropTypes.shape({
    id: PropTypes.string,
    orientation: PropTypes.oneOf([
      'north', 'east', 'south', 'west'
    ]),
    tile_img: PropTypes.string,
  })
};