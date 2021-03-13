import React from 'react';
import PropTypes from 'prop-types';
// internal
import style from './style.module.css';


/**
 * Wrap component for responsive grids.
 *
 * @component
 * @return {React.Componet}
 */
export default function Container({children, className='', ...restProps}) {
  const containerClassNames = [
    className,
    style.container,
  ].join(' ');

  return (
    <div className={containerClassNames} {...restProps}>
      {children}
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
