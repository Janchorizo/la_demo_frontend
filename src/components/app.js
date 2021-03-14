// external
import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
// internal
import {
  LocalizedRouter,
  LocalizedSwitch,
  TopBar,
  Footer,
} from 'components';
import {
  AppLanguage,
  AppRoute,
} from 'common/intl';
import {
  Home,
  Myself,
  Knowledge,
  Parkings,
  TheOffer,
} from 'pages';
import {GithubBanner} from 'components/github_banner';
import 'common/style/theme.css';


/**
 * App root component
 * @component
 * @return {React.Component}
 */
export default function App() {
  return (
    <div className='content-layout'>
      <GithubBanner url='https://github.com/Janchorizo/la_demo_frontend'/>
      <LocalizedRouter
        RouterComponent={BrowserRouter}
        defaultLanguage={AppLanguage.Spanish}>
        <TopBar />
        <LocalizedSwitch>
          <Route exact path={AppRoute.Myself}>
            <Myself />
          </Route>
          <Route exact path={AppRoute.TheOffer}>
            <TheOffer />
          </Route>
          <Route exact path={AppRoute.Parkings}>
            <Parkings />
          </Route>
          <Route exact path={AppRoute.Knowledge}>
            <Knowledge />
          </Route>
          <Route exact path={AppRoute.Home}>
            <Home />
          </Route>
        </LocalizedSwitch>
        <Footer />
      </LocalizedRouter>
    </div>
  );
};
