import React, { Component } from 'react';

import './buttonStyle.scss';

export default class Button extends Component {

    constructor (props) {
        super(props);
    }
    /* What can they customize?
    stroke-width
    stroke color
    button height
    button size
    font size
    font content
    custom path
    */
    render() {
        return (
            <a className="buttonHolder">
              <svg viewBox="0 0 180 60" className="buttonSVG">
                <path
                  className="buttonSVGPath"
                  d="M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z"
                  >
                </path>
              </svg>
              <span>I'm a Button!</span>
            </a>
        );
    }
}
