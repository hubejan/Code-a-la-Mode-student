import React from 'react';
import MainView from './components/MainView';
import Main from './components/Main';
import Button from './components/animatedButton';
import CodeTheme from './utils/codeTheme';

import Flexbox from 'flexbox-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const App = () => (
  <Flexbox flexDirection="column" minHeight="100vh">
    <div>
      <MuiThemeProvider muiTheme={getMuiTheme(CodeTheme)}>
      <Main />
      </MuiThemeProvider>
    </div>
  </Flexbox>
);
export default App;
