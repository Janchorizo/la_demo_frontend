import React from 'react';
import {useHistory} from 'react-router-dom';
import {useIntl} from 'react-intl';
import {
  useLocation,
} from 'react-router-dom';
// internal
import {appStrings, AppLanguage} from 'common/intl';
import style from './style.module.css';


/**
 * Finds the intl key for a path based on the path and language.
 * @param {string} path The route to serach with
 * @param {string} lang The localization of the path
 * @return {string}
 */
function getPathKey(path, lang) {
  const langRe = RegExp(`${lang}(.*)`);
  const appString = path.split(langRe, 2)[1];
  const match = Object
      .entries(appStrings[lang])
      .find(([key, string]) => string === appString);
  const pathKey = match[0];
  return pathKey;
}


/**
 * Creates the full path for a rout key and language.
 * @param {string} pathKey Key for the route path
 * @param {string} lang The localization of the path
 * @return {string}
 */
function getLocalizedPath(pathKey, lang) {
  return `/${lang}${appStrings[lang][pathKey]}`;
}


/**
 * HTML select-shaped language selector. Upon interaction, changes the location
 * to the localized version of the current page for the selected language.
 * @component
 * @return {React.Component}
 */
export default function LanguageSelector() {
  const history = useHistory();
  const {locale} = useIntl();
  const {pathname} = useLocation();
  const pathKey = getPathKey(pathname, locale);

  const cssClasses = [
    style.langSwitch,
  ].join(' ');


  /**
   * Changes the browser location based on the selected language.
   * @param {object} e JS event object
   */
  function onLanguageSelect(e) {
    history.push(e.target.value);
  }

  return (
    <div className={cssClasses}>
      <span className={style.boxIcon}>
        ◍
      </span>
      <select onChange={onLanguageSelect}
        value={getLocalizedPath(pathKey, locale)}>
        <option value={getLocalizedPath(pathKey, AppLanguage.Spanish)}>
          Español
        </option>
        <option value={getLocalizedPath(pathKey, AppLanguage.English)}>
          English
        </option>
      </select>
      <span className={style.boxIcon}>
        ﹀
      </span>
    </div>
  );
}
