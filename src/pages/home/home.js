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
      <div id={style['versatility-section']}>
        <div id={style['versatility-section-title']}>
          <h1>¿Tienes requisitos y arquitecturas cambiantes?</h1>
          <h2>Deja que ayude</h2>
        </div>
        <div className={style.column}>
          <h3>Sólo indícame qué quieres</h3>
          <p>dweijfgh eerfiub e3biu dkjcne3bui wkd</p>
        </div>
        <div className={style.column}>
          <h3>Una relación para rato</h3>
          <p></p>
        </div>
        <div className={style.column}>
          <h3>Sin miedo a fallar</h3>
          <p></p>
        </div>
      </div>
      <div id={style['examples-card']}>
        <h1>Ya he probado muchas combinaciones</h1>
        <div id={style['example-carrousel']}></div>
      </div>
      <Container id={style['hero']} className={style.section}>
        <div>
          <h1>Avanzamos juntos</h1>
          <h2>Versatilidad y constancia en frontend o backend.</h2>
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
          <h1>También tengo proyectos personales</h1>
          <h2>
            En mi tiempo libre hago projectos para estar ágil.
            <br/>
            Relacionados con visualización de datos normalmente, siempre
            aplico una nueva técnica, lenguaje o framework.
          </h2>
          <a className='button'
            href='https://www.buymeacoffee.com/janchorizo'
            target='blank'>
            Saber más
          </a>
        </div>
        <div id={style['buymeacoffee-img']}
          style={{backgroundImage: 'url(/assets/chart_sample.png)'}}>
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
