import React from 'react';
import Flexbox from 'flexbox-react'
import '../public/stylesheets/loader.scss';
import { magenta } from '../public/colors';

const svgStyles = {
  width: '65px',
  height: '65px',
  viewBox: '0 0 66 66',
  xmlns: 'http://www.w3.org/2000/svg'
};

const circleStyles = {
  fill: 'none',
  strokeWidth: 6,
  strokeLinecap: 'round',
  cx: 33,
  cy: 33,
  r: 30
};

const msgStyles = {
  color: magenta,
  fontFamily: 'ROBOTO'
}

const Loading = (props) => {
  return (
    <Flexbox flexDirection="column" alignItems="center">
      <h2 style={msgStyles}>Verifying Ice Cream Flavors...</h2>
      <div>
        <svg style={svgStyles} className="spinner">
          <circle style={circleStyles} className="path"></circle>
        </svg>
      </div>
    </Flexbox>
  );
}

export default Loading;
