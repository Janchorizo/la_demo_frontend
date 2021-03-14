import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
// internal
import style from './style.module.css';


/**
 * Large tile of predefined size to be used
 * as jumbo buttons.
 * @component
 * @return {React.Component}
 */
export default function TileLink({
  title,
  body,
  img,
  path,
}) {
  const tileStyle = {
    backgroundImage: `url(${img})`,
  };
  return (
    <Link exact to={path} className={style.tile} style={tileStyle}>
      <span className={style.arrow}>&#129125;</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </Link>
  );
}

TileLink.propTypes = {
  img: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
};
