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
      <div id={style['experience']}>
        <h1>{formatMessage({id: 'myself.already_done'})}</h1>
        <div className={style.moreEntry}>
          <h2>{formatMessage({id: 'myself.already_done1_title'})}</h2>
          <p>{formatMessage({id: 'myself.already_done1_text'})}</p>
        </div>
        <div className={style.moreEntry}>
          <h2>{formatMessage({id: 'myself.already_done2_title'})}</h2>
          <p>{formatMessage({id: 'myself.already_done2_text'})}</p>
        </div>
        <div className={style.moreEntry}>
          <h2>{formatMessage({id: 'myself.already_done3_title'})}</h2>
          <p>{formatMessage({id: 'myself.already_done3_text'})}</p>
        </div>
        <div className={style.moreEntry}>
          <h2>{formatMessage({id: 'myself.already_done4_title'})}</h2>
          <p>{formatMessage({id: 'myself.already_done4_text'})}</p>
        </div>
        <div className={style.moreEntry}>
          <h2>{formatMessage({id: 'myself.already_done5_title'})}</h2>
          <p>{formatMessage({id: 'myself.already_done5_text'})}</p>
        </div>
      </div>
      <div id={style['more-prerow']}>
      </div>
      <div id={style['more']}>
        <h1>
          {formatMessage({id: 'myself.more_title'})}
        </h1>
        <h2>{formatMessage({id: 'myself.more_text'})}</h2>
        <a target='blank' href={formatMessage({id: 'myself.cv_link'})}>
          {formatMessage({id: 'myself.more_link'})} &#129130;
        </a>
      </div>
    </PageContainer>
  );
}
