// external
import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
// internal
import {
  Container,
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
    <Container>
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
          <Route exact path={AppRoute.Home}>
            <Home />
          </Route>
        </LocalizedSwitch>
        <Footer />
      </LocalizedRouter>
    </Container>
  );
};
