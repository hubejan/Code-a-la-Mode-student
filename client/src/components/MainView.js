import React, { Link } from 'react';
import CodeView from './CodeView';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import store from '../store';
//  import fs from 'download-npm'
// import fs from 'fs-es6';
import fs from 'bro-fs';

const logSuccess = (value) => console.log(`Success with: ${value} !!!`)

const makeFilesTree = (fileSystem) => {
  for (let i = 0; i <= 10; i++){
      fileSystem.writeFile(`file${i}.txt`, `File ${i} content !!!`)
      .then(logSuccess);
  }
}


const createFileSystem  = () => {
fs.init({type: window.TEMPORARY, bytes: 5 * 1024 * 1024})
  .then(() => fs.mkdir('dir'))
  .then(() => fs.writeFile('file.txt', 'hello world'))
  .then(() => fs.readdir(fs.getRoot()))
  .then((res) => fs.readdir(fs.getRoot()))
  .then( ret => console.log(ret))
  // fs.init({type: window.TEMPORARY, bytes: 5 * 1024 * 1024})
  // .then(fs => makeFilesTree(fs));
  

  // fs.mkdirSync('/tmp').then( el => console.log(`directory created: ${el}` ) );
//   downloadNpm(
//   'file-loader@^0.11.2', // for example, express@4.0.0-rc4 or tape@latest etc
//   '/tmp' // the path to download
// ).then(() => {console.log('downloaded !!!')}, () => {console.log('ERROR with loading')} )
};

const loadCode = () => {
  return null;
};

const MainView = ({ code, snapshots, selectSnapshot }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <h1>NAVBAR</h1>    
      </div>
      <button id="load" type="button" onClick={() => { createFileSystem();}}> Load </button>
    </div>
    <div className="row">
      <div className="col-md-3">
        <Sidebar snapshots={snapshots} selectSnapshot={selectSnapshot} />
      </div>
      <div>
      </div>
      <div className="col-md-9">
        <h1>Lecture</h1>
        <div className="row">
          <CodeView />
        </div>
      </div>
    </div>
  </div>
);




const mapStateToProps = ({ code, snapshots, selectSnapshot }) => ({
  code: 'class test{};',
  snapshots: { list: [], 
               selected: {}},
});

const mapDispatch = dispatch => ({
  selectSnapshot: () => {console.log('Select SNAPSHOT!!!');}
});

export default connect(mapStateToProps, mapDispatch)(MainView);