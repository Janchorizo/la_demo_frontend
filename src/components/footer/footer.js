import React from 'react';
import {useIntl} from 'react-intl';
// internal
import {
  LanguageSelector,
  Container,
} from 'components';
import {
  AppRoute,
} from 'common/intl';
import style from './style.module.css';


/**
 * Footer component with external links and language selector.
 *
 * @component
 * @return {React.Component}
 */
export default function Footer() {
  const {formatMessage, locale} = useIntl();
  const homePath = `/${locale}${formatMessage({id: AppRoute.Home})}`;

  return (
    <Container className={style.footer}>
      <div className={[style.content, style.columns].join(' ')}>
        <div>
          <p>
            {formatMessage({id: 'footer.title1'})}
            <br/>
            <b>{formatMessage({id: 'footer.title2'})}</b>
          </p>
          <LanguageSelector />
        </div>
        <div>
          <ul>
            <li>
              <a href={formatMessage({id: 'footer.cv_link'})} target='blank'>
                {formatMessage({id: 'footer.links_cv'})}
              </a>
            </li>
            <li>
              <a href='https://janchorizo.github.io/' target='blank'>
                {formatMessage({id: 'footer.links_web'})}
              </a>
            </li>
            <li>
              <a href='https://elparking.com/' target='blank'>
                {formatMessage({id: 'footer.links_origin'})} <i>El Parking</i>
              </a>
            </li>
            <li>
              <a href='https://github.com/Janchorizo/la_demo_frontend' target='blank'>
                {formatMessage({id: 'footer.links_front_github'})}
              </a>
            </li>
            <li>
              <a href='https://github.com/Janchorizo/la_demo_backend' target='blank'>
                {formatMessage({id: 'footer.links_back_github'})}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li><a href='https://janchorizo.github.io/' target='blank'>
              {formatMessage({id: 'footer.aside_me'})}
            </a>
            </li>
            <li>
              <a href='mailto:jancho@usal.es' target='blank'>
                jancho@usal.es
              </a>
            </li>
            <li>
              <a href={formatMessage({id: 'footer.cv_link'})} target='blank'>
                {formatMessage({id: 'footer.aside_cv'})}
              </a>
            </li>
            <li>
              <div className='flex three'>
                <span className='col'>♥</span>
                <span className='col'>☕</span>
                <span className='col'>&#128761;</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.content}>
        <div className={'flex four '+style.bottom}>
          <a className={style.logo} href={homePath}>
            <div style={{backgroundImage: 'url(/logo.png)'}}/>
          </a>
          <a href='#' target='blank'>
            {formatMessage({id: 'footer.bottom_certs'})}
          </a>
          <a href='#' target='blank'>
            {formatMessage({id: 'footer.bottom_priv'})}
          </a>
          <a href='#' target='blank'>
            {formatMessage({id: 'footer.bottom_terms'})}
          </a>
        </div>
      </div>
    </Container>
  );
}
