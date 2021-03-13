import React from 'react';
import {useIntl} from 'react-intl';
import {
  NavLink,
  useLocation,
} from 'react-router-dom';
import style from './style.module.css';
import {appStrings, AppLanguage} from 'common/intl';


function getPathKey(path, lang){
  const langRe = RegExp(`${lang}(.*)`);
  const appString = path.split(langRe, 2)[1];
  const [pathKey, matchedPath] = Object
    .entries(appStrings[lang])
    .find(([key, string]) => string === appString);
  return pathKey;
}

function getLocalizedPath(pathKey, lang){
  return `/${lang}${appStrings[lang][pathKey]}`;
}

export default function LanguageSelector() {
  const {formatMessage, locale} = useIntl();
  const { pathname } = useLocation();
  const pathKey = getPathKey(pathname, locale);

  const cssClasses = [
    style.langSwitch
  ].join(' ');

  return (
    <ul className={cssClasses}>
      <li>
        <NavLink
            exact
            activeClassName={style.active}
            to={getLocalizedPath(pathKey, AppLanguage.English)}>
          en
        </NavLink>
      </li>
      <li>
        <NavLink
            exact
            activeClassName={style.active}
            to={getLocalizedPath(pathKey, AppLanguage.Spanish)}>
          es
        </NavLink>
      </li>
    </ul>
   );
}