import React from 'react';
import {
  GlobalNavLinks,
  LanguageSelector,
} from 'components';
//import style from './style.module.css';

export default function TopBar(){
  const logoStyle = {
    margin: 'var(--double-text) var(--small)',
    top: 0,
    zIndex: 211,
    backgroundPosition: 'center',
    height: '32px',
    width: '142px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(/logo.png)',
  };

  return (
    <div>
      <div className='half light-bg'>
        <a href='#'>
          <div style={logoStyle}/>
        </a>
      </div>
      <div>
        <ul>
          <GlobalNavLinks />
        </ul>
        <LanguageSelector />
        </div>
    </div>
  );
}
