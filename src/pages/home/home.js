import React from 'react';
// internal
import {
  PageContainer,
  Container,
} from 'components';
import style from './style.module.css';


/**
 * Home page component.
 * @component
 * @return {React.Component}
 */
export default function Home() {
  return (
    <PageContainer>
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
