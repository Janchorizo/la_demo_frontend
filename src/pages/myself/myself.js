import React from 'react';
import {useIntl} from 'react-intl';
// internal
import {
  PageContainer,
  Container,
} from 'components';
import style from './style.module.css';


/**
 * Myself page component.
 * @component
 * @return {React.Component}
 */
export default function Myself() {
  const {formatMessage} = useIntl();

  return (
    <PageContainer>
      <Container id={style['hero']} className={style.section}>
        <div>
          <h1>{formatMessage({id: 'myself.hero_title'})}</h1>
          <h2>{formatMessage({id: 'myself.hero_subtitle'})}</h2>
        </div>
        <div id={style['hero-img']}
          style={{backgroundImage: 'url(/assets/myself_hero.png)'}}>
        </div>
      </Container>
      <Container id={style['hero']} className={style.section}>
        <div>
          <h1>{formatMessage({id: 'home.hero_title'})}</h1>
          <h2>{formatMessage({id: 'home.hero_subtitle'})}</h2>
        </div>
        <div id={style['hero-img']}
          style={{backgroundImage: 'url(/assets/me_thinking.jpg)'}}>
        </div>
      </Container>
      <Container id={style['hero']} className={style.section}>
        <div>
          <h1>{formatMessage({id: 'home.hero_title'})}</h1>
          <h2>{formatMessage({id: 'home.hero_subtitle'})}</h2>
        </div>
        <div id={style['hero-img']}
          style={{backgroundImage: 'url(/assets/me_thinking.jpg)'}}>
        </div>
      </Container>
      <Container id={style['hero']} className={style.section}>
        <div>
          <h1>{formatMessage({id: 'home.hero_title'})}</h1>
          <h2>{formatMessage({id: 'home.hero_subtitle'})}</h2>
        </div>
        <div id={style['hero-img']}
          style={{backgroundImage: 'url(/assets/me_thinking.jpg)'}}>
        </div>
      </Container>
    </PageContainer>
  );
}
