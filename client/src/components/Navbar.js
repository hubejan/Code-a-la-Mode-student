import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">Code...</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(null,null)(Navbar);

