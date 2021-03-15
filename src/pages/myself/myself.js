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
      <div id={style['learning']}>
        <h1>{formatMessage({id: 'myself.learning_title'})}</h1>
        <h2>{formatMessage({id: 'myself.learning_subtitle'})}</h2>
        <div className={style.learning_step}>
          <img src="/assets/learning_step_1.png"/>
          <h3>{formatMessage({id: 'myself.learning_step1_title'})}</h3>
          <h4>{formatMessage({id: 'myself.learning_step1_text'})}</h4>
        </div>
        <div className={style.learning_step}>
          <img src="/assets/learning_step_2.png"/>
          <h3>{formatMessage({id: 'myself.learning_step2_title'})}</h3>
          <h4>{formatMessage({id: 'myself.learning_step2_text'})}</h4>
        </div>
        <div className={style.learning_step}>
          <img src="/assets/learning_step_3.png"/>
          <h3>{formatMessage({id: 'myself.learning_step3_title'})}</h3>
          <h4>{formatMessage({id: 'myself.learning_step3_text'})}</h4>
        </div>
        <div className={style.learning_step}>
          <img src="/assets/learning_step_4.png"/>
          <h3>{formatMessage({id: 'myself.learning_step4_title'})}</h3>
          <h4>{formatMessage({id: 'myself.learning_step4_text'})}</h4>
        </div>
      </div>
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
