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
      <Container id={style['hero']} className={style.section}>
        <div>
          <h1>{formatMessage({id: 'home.hero_title'})}</h1>
          <h2>{formatMessage({id: 'home.hero_subtitle'})}</h2>
        </div>
        <div id={style['hero-img']}
          style={{backgroundImage: 'url(/assets/me_thinking.jpg)'}}>
        </div>
      </Container>
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
      <Container id={style['buymeacoffee']} className={style.section}>
        <div>
          <h1>{formatMessage({id: 'home.buymeacoffee_title'})}</h1>
          <h2>
            {formatMessage({id: 'home.buymeacoffee_text1'})}
            <br/>
            {formatMessage({id: 'home.buymeacoffee_text2'})}
          </h2>
          <a className='button'
            href='https://www.buymeacoffee.com/janchorizo'
            target='blank'>
            {formatMessage({id: 'home.buymeacoffee_link'})}
          </a>
        </div>
        <div id={style['buymeacoffee-img']}
          style={{backgroundImage: 'url(/assets/chart_sample.png)'}}>
        </div>
      </Container>
      <div id={style['versatility-section']}>
        <div id={style['versatility-section-title']}>
          <h1>{formatMessage({id: 'home.versatility_section_title'})}</h1>
          <h2>{formatMessage({id: 'home.versatility_section_subtitle'})}</h2>
        </div>
        <div className={style.column}>
          <h3>{formatMessage({id: 'home.versatility_section_col1_title'})}</h3>
          <p>{formatMessage({id: 'home.versatility_section_col1_text'})}</p>
        </div>
        <div className={style.column}>
          <h3>{formatMessage({id: 'home.versatility_section_col2_title'})}</h3>
          <p>{formatMessage({id: 'home.versatility_section_col2_text'})}</p>
        </div>
        <div className={style.column}>
          <h3>{formatMessage({id: 'home.versatility_section_col3_title'})}</h3>
          <p>{formatMessage({id: 'home.versatility_section_col3_text'})}</p>
        </div>
      </div>
      <div id={style['examples-card']}>
        <h1>
          {formatMessage({id: 'home.versatility_section_carrousel_title'})}
        </h1>
        <div id={style['example-carrousel']}></div>
      </div>
      <Container className={style.section}></Container>
    </PageContainer>
  );
}
