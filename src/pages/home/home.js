import React from 'react';
import {useIntl} from 'react-intl';
// internal
import {
  PageContainer,
  Container,
  TileLink,
} from 'components';
import {
  AppRoute,
} from 'common/intl';
import style from './style.module.css';


/**
 * Home page component.
 * @component
 * @return {React.Component}
 */
export default function Home() {
  const {formatMessage, locale} = useIntl();

  /**
   * Create a localized full path for a route key
   * @param {string} pathKey
   * @return {string}
   */
  function localizeRouteKey(pathKey) {
    return `/${locale}` + formatMessage({id: pathKey});
  }

  return (
    <PageContainer>
      <div id={style['page-buttons']}>
        <TileLink
          path={localizeRouteKey(AppRoute.Myself)}
          img="/assets/me_link_background.png"
          title={formatMessage({id: 'home.tile1_title'})}
          body={formatMessage({id: 'home.tile1_body'})}/>
        <TileLink
          path={localizeRouteKey(AppRoute.Parkings)}
          img="/assets/parkings_link_background.png"
          title={formatMessage({id: 'home.tile2_title'})}
          body={formatMessage({id: 'home.tile2_body'})}/>
        <TileLink
          path={localizeRouteKey(AppRoute.TheOffer)}
          img="/assets/offer_link_background.png"
          title={formatMessage({id: 'home.tile3_title'})}
          body={formatMessage({id: 'home.tile3_body'})}/>
      </div>
      <Container className={style.section}>
        <div>
          <h3>Some section title</h3>
        </div>
        <div className='light-bg'>
        </div>
      </Container>
      <Container className={style.section}>
        <div>
          <h3>Some section title</h3>
        </div>
        <div className='light-bg'>
        </div>
      </Container>
      <Container className={style.section}>
        <div>
          <h3>Some section title</h3>
        </div>
        <div className='light-bg'>
        </div>
      </Container>
      <Container className={style.section}>
        <div>
          <h3>Some section title</h3>
        </div>
        <div className='light-bg'>
        </div>
      </Container>
    </PageContainer>
  );
}
