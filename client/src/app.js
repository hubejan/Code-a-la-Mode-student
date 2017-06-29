import React from 'react';
import MainView from './components/MainView';
import Main from './components/Main';
import Button from './components/animatedButton';

const initializeFS = () => {
  console.log('Initializing FS...')
  var html5fs = new BrowserFS.FileSystem.HTML5FS(10, window.TEMPORARY);
  html5fs.allocate();
  BrowserFS.initialize(html5fs);
  console.dir(html5fs);
  console.log('FS Initialized!!')
}


const App = () => (
    <div>
      {initializeFS()}
      <Main />
    </div>
);


export default App;
