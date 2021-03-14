import React from 'react';
import {useIntl} from 'react-intl';
// internal
import {
  GlobalNavLinks,
} from 'components';
import {
  AppRoute,
} from 'common/intl';
import style from './style.module.css';


/**
 * Topbar component with global navigation and login component.
 * @component
 * @return {React.Component}
 */
export default function TopBar() {
  const {formatMessage, locale} = useIntl();
  /**
   * Create a localized full path for a route key
   * @param {string} pathKey
   * @return {string}
   */
  function localizeRouteKey(pathKey) {
    return `/${locale}` + formatMessage({id: pathKey});
  }
  const homePath = localizeRouteKey(AppRoute.Home);

  return (
    <React.Fragment>
      <div className={style.top}>
        <a className={style.logo} href={homePath}>
          <div style={{backgroundImage: 'url(/logo.png)'}}/>
        </a>
      </div>
      <div className={style.bottom}>
        <div className={style.logoSized}/>
        <ul className={style.mainNav}>
          <GlobalNavLinks />
        </ul>
      </div>
      <div className={style.navBorder}>
      </div>
    </React.Fragment>
  );
}
