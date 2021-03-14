import React from 'react';
import {NavLink} from 'react-router-dom';
import {useIntl} from 'react-intl';

import {
  AppRoute,
  AppRouteTitle,
} from 'common/intl';

/**
 * Locale-aware global navigation
 * @component
 * @return {React.Component}
 */
export default function GlobalNavLinks() {
  const {formatMessage, locale} = useIntl();
  /**
   * Create a localized full path for a route key
   * @param {string} pathKey
   * @return {string}
   */
  function localizeRouteKey(pathKey) {
    return `/${locale}` + formatMessage({id: pathKey});
  }

  const routes = Object.entries(AppRoute);
  const links = routes.map(([key, routeName]) => (
    <li key={key}>
      <NavLink
        exact
        to={localizeRouteKey(routeName)}
      >
        {formatMessage({id: AppRouteTitle[routeName] || ''})}
      </NavLink>
    </li>
  ));

  return (
    <React.Fragment>
      {links}
    </React.Fragment>
  );
}
