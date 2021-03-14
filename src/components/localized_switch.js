import React from 'react';
import PropTypes from 'prop-types';
import {Switch} from 'react-router';
import {useIntl} from 'react-intl';

/**
 * localizeRoutePath
 * Prepend the path with the current localization prefix
 * @param {string} path
 * @param {object} formatMessage
 * @param {string} locale
 * @return {string} Localized string path or path array
 */
function localizeRoutePath(path, formatMessage, locale) {
  switch (typeof path) {
    case 'undefined':
      return undefined;
    case 'object':
      return path.map((key) => `/${locale}` + formatMessage({id: key}));
    default:
      const isFallbackRoute = path === '*';
      return isFallbackRoute?
        path:
        `/${locale}` + formatMessage({id: path});
  }
}

/**
 * LocalizedSwitch
 * A language aware switch that provides each <route> component
 * with a language prop.
 * @component
 * @return {React.Component}
 */
export default function LocalizedSwitch({children}) {
  const {formatMessage, locale} = useIntl();

  return (
    <Switch>
      {
        React.Children.map(children, (child) =>
          React.cloneElement(child, {
            ...child.props,
            path: localizeRoutePath(child.props.path, formatMessage, locale),
          }),
        )
      }
    </Switch>
  );
}

LocalizedSwitch.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
