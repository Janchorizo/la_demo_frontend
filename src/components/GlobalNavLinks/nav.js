import React from 'react';
import {NavLink} from 'react-router-dom';
import {useIntl} from 'react-intl';

// import style from './style.module.css';
import {
  AppRoute,
  AppRouteTitle,
} from 'common/intl';

/**
 * Nav
 * Locale-aware global navigation
 */
export default function GlobalNavLinks() {
  const {formatMessage, locale} = useIntl();
  function localizeRouteKey(path) {
    return `/${locale}` + formatMessage({id: path});
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
