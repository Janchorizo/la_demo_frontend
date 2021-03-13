// external
import React from 'react';
// internal
import {GithubBanner} from 'components/github_banner';
import 'common/style/theme.css';

export default function App() {
  return (
    <div className='flex five center'>
      <GithubBanner url='https://github.com/Janchorizo/la_demo_frontend'/>
      <h1 className='half light-bg main-c'>La Demo</h1>
    </div>
  );
};
