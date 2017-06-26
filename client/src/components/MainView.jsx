import React from 'react';
import CodeView from './CodeView';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import store from '../store';


const MainView = ({ code, snapshots, selectSnapshot }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <h1>NAVBAR</h1>    
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <Sidebar snapshots={snapshots} selectSnapshot={selectSnapshot} />
      </div>
      <div className="col-md-9">
        <h1>Lecture</h1>
        <div className="row">
          <CodeView code={code} />
        </div>
      </div>
    </div>
  </div>
);


const mapStateToProps = ({ code, snapshots, selectSnapshot }) => ({
  code: { source: 'source code' },
  snapshots: { list: [], selected: {}},
});

const mapDispatch = (dispatch) => ({
  selectSnapshot: () => {console.log('Select SNAPSHOT!!!');}
});

export default connect(mapStateToProps, mapDispatch)(MainView);


