import React from 'react';
import {useIntl} from 'react-intl';
// internal
import {
  GlobalNavLinks,
  LanguageSelector,
} from 'components';
import {
  appStrings,
  AppLanguage,
  AppRoute,
} from 'common/intl';
import style from './style.module.css';

export default function TopBar() {
  const {formatMessage, locale} = useIntl();
  function localizeRouteKey(path) {
    return `/${locale}` + formatMessage({id: path});
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
