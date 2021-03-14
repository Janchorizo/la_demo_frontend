import React from 'react';
import {IntlProvider} from 'react-intl';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
// internal
import {appStrings} from 'common/intl';


/**
 * Locale-aware router. Injects locale props to children.
 * @component
 * @return {React.Component}
 */
export default function LocalizedRouter({
  children, // <route> components
  RouterComponent,
  defaultLanguage,
}) {
  return <RouterComponent>
    <Route path="/:lang([a-z]{2})">
      {({match, location}) => {
        /**
         * Get current language
         * Set default locale to en if base path is used without a language
         */
        const params = match ? match.params : {};
        const {lang = defaultLanguage} = params;

        /**
         * If language is not in route path, redirect to language root
         */
        const {pathname} = location;
        if (!pathname.includes(`/${lang}/`)) {
          return <Redirect to={`/${lang}/`} />;
        }

        /**
         * Return Intl provider with default language set
         */
        return (
          <IntlProvider locale={lang} messages={appStrings[lang]}>
            {children}
          </IntlProvider>
        );
      }}
    </Route>
  </RouterComponent>;
}

LocalizedRouter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  RouterComponent: PropTypes.node,
  defaultLanguage: PropTypes.string,
};
