import React from 'react';
import {
  GlobalNavLinks,
  LanguageSelector,
} from 'components';
import style from './style.module.css';

export default function TopBar(){
  return (
    <React.Fragment>
      <div className={style.top}>
        <a className={style.logo} href='#'>
          <div style={{backgroundImage: 'url(/logo.png)'}}/>
        </a>
      </div>
      <div className={style.bottom}>
        <div className={style.logoSized}/>
        <ul className={style.mainNav}>
          <GlobalNavLinks />
        </ul>
      </div>
      <div className={style.navBorder}>
      </div>
    </React.Fragment>
  );
}
