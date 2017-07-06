import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import merge from 'lodash.merge';
const mColors = require('material-ui/styles/colors');

import colors from '../public/colors';

const muiTheme = {
  palette: {
    textColor: mColors.grey200,
    primary1Color: colors.codeTheme,
    accent1Color: mColors.redA200,
    accent2Color: mColors.redA400,
    accent3Color: mColors.redA100,
  },
  table: {
    height: 'calc(100vh - 122px)'
  },
  tableHeaderColumn: {
    fontSize: '14px'
  }
};
const theme = merge(darkBaseTheme, muiTheme)
export default theme;
