import React from 'react';
import {
  GlobalNavLinks,
  LanguageSelector,
} from 'components';
//import style from './style.module.css';

export default function TopBar(){
  return (
    <div>
      <div>
        <ul>
          <GlobalNavLinks />
        </ul>
        <LanguageSelector />
        </div>
    </div>
  );
}
