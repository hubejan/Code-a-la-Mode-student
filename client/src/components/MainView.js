import React, { Link } from 'react';
import CodeView from './CodeView';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import store from '../store';
import FileTree from 'react-filetree-electron';
const BrowserFS = require('browserfs');
const Promise = require('bluebird');
//  import fs from 'download-npm'
// import fs from 'fs-es6';
// import fs from 'bro-fs';
//import fs from ''

var fs = Promise.promisifyAll(require('fs'));


// var fs = require('fs');
// const logSuccess = (value) => console.log(`Success with: ${value} !!!`)

// const makeFilesTree = (fileSystem) => {
//   for (let i = 0; i <= 10; i++){
//       fileSystem.writeFile(`file${i}.txt`, `File ${i} content !!!`)
//       .then(logSuccess);
//   }
// }

// const readF = (file) => {

//   fs.readdirAsync('/',(err,rv)=>{console.log(rv);});
//   // fs.readFile('/test22.txt', function(err, contents) {
//   //   console.log(contents.toString());
//   //   // console.log(contents);
//   // });
// }

// const writeF = (file) => {
//   fs.writeFile( file, 'Cool, I can do this in the browser!');
// }

// const initializeFS = () => {
//   console.log('Initializing FS...')
//   var html5fs = new BrowserFS.FileSystem.HTML5FS(10);
//   html5fs.allocate();
//   BrowserFS.initialize(html5fs);
//   console.dir(html5fs);
//   console.log('FS Initialized!!')
// }



// const createFileSystem  = () => {
//   fs = require('fs');
// //   fs.writeFileSync('/test22.txt', 'Cool, I can do this in the browser!', function(err) {
// //     console.log(`File created ? ${fs}`)
// //     console.dir(fs)
// //   fs.readFile('/test22.txt', function(err, contents) {
// //     // console.log(contents.toString());
// //     console.log(contents);
// //   });
// // });
// // fs.mkdirSync('/');
// let fileName = '/test22.txt';

// try {
//   fs.writeFile( fileName, 'Cool, I can do this in the browser!');
// }catch (err) {
//   console.log(`Catch error: ${err}`)
//   console.dir(err)
// }
// // ,(err)=>{
// //     console.log('errorWWW',err);
// // });

//   fs.readFile(fileName, function(err, contents) {
//     console.log(contents.toString());
//     console.log(err);
//   });


// console.log(fs.readdirSync('/'))
//  (ret) => {console.log(`Directory entries: ${ret}`)})


//
// fs.init({type: window.TEMPORARY, bytes: 5 * 1024 * 1024})
//   .then(() => fs.mkdir('dir'))
//   .then(() => fs.writeFile('file.txt', 'hello world'))
//   .then(() => fs.readdir(fs.getRoot()))
//   .then((res) => fs.readdir(fs.getRoot()))
//   .then( ret => console.log(ret))
//
  // fs.init({type: window.TEMPORARY, bytes: 5 * 1024 * 1024})
  // .then(fs => makeFilesTree(fs));
  

  // fs.mkdirSync('/tmp').then( el => console.log(`directory created: ${el}` ) );
//   downloadNpm(
//   'file-loader@^0.11.2', // for example, express@4.0.0-rc4 or tape@latest etc
//   '/tmp' // the path to download
// ).then(() => {console.log('downloaded !!!')}, () => {console.log('ERROR with loading')} )
// };

const loadCode = () => {
  return null;
};

const MainView = ({ code, snapshots, selectSnapshot }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <h1>NAVBAR</h1>    
        <FileTree directory={'/'} fs={fs} />
      </div>
      <button id="init" type="button" onClick={() => { initializeFS();}}> Init </button>
      <button id="load" type="button" onClick={() => { createFileSystem();}}> Load </button>
      <button id="writeF" type="button" onClick={() => { writeF('/test22.txt');}}> writeF </button>
      <button id="readF" type="button" onClick={() => { readF('/test22.txt');}}> readF </button>
      <button id="show" type="button" onClick={() => { renderTree() }}> show </button>
      
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
