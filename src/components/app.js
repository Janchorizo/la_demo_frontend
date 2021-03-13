// external
import React from 'react';
// internal
import {GithubBanner} from 'components/github_banner';
import 'common/style/theme.css';

export default function App() {
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
    <div className='flex five center'>
      <GithubBanner url='https://github.com/Janchorizo/la_demo_frontend'/>
      <div className='half light-bg'>
        <a href='#'>
          <div style={logoStyle}/>
        </a>
      </div>
    </div>
  );
};
