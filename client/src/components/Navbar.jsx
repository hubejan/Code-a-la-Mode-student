import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react';

class Navbar extends React.Component {
  render() {
    return (
      <Flexbox element="header" height="60px" >
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">Code...</Link>
      </Flexbox>
    );
  }
}

export default connect(null,null)(Navbar);

