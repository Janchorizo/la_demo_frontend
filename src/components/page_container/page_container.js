import React from 'react';
import PropTypes from 'prop-types';
// internal
import style from './style.module.css';


/**
 * Wrap component for page content. Ensures that the global grid
 * order is kept.
 *
 * @component
 * @return {React.Componet}
 */
export default function PageContainer({children, className='', ...restProps}) {
  const containerClassNames = [
    className,
    style.pageContainer,
  ].join(' ');

  return (
    <div className={containerClassNames} {...restProps}>
      {children}
    </div>
  );
}

PageContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
