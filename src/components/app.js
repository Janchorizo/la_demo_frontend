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

export default function App() {
  const logoStyle = {
    margin: 'var(--double-text) var(--small)',
    top: 0,
    zIndex: 211,
    backgroundPosition: 'center',
    height: '32px',
    width: '142px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(/logo.png)',
  };

  return (
    <div className='flex five center'>
      <GithubBanner url='https://github.com/Janchorizo/la_demo_frontend'/>
      <div className='half light-bg'>
        <a href='#'>
          <div style={logoStyle}/>
        </a>
      </div>
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
      </LocalizedRouter>
    </div>
  );
};
