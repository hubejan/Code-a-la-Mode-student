import React, { Link, Component } from 'react';
import CodeView from './CodeView';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import store from '../store';
import FileTree from '../containers/FileTreeContainer';
import { getAllFiles } from '../utils/file-functions';
import Promise from 'bluebird';
import fs from 'fs';
const pfs = Promise.promisifyAll(fs);

const writeNum = (num) => {
  const test = `/test${num}`;
  fs.writeFile(`${test}.txt`, `${test}`, function(writeErr) {
    console.log(`wrote ${test}`);
  });
};

const readNum = (num) => {
  const test = `/test${num}`;
  fs.readFile(`${test}.txt`, (readErr, contents) => {
    console.log(contents.toString());
  });
};

const writeAndRead = () => {
  fs.writeFile('/test3.txt', 'text3', function(writeerr) {
    fs.readFile('/test2.txt', function(readerr, contents) {
      console.log(contents.toString());
    });
  });
};

const readDir = (dir) => {
  fs.readdir(dir, (err, contents) => {
    if (err) console.log(err);
    console.log(contents.toString());
  });
};
//////////////////////////////////////
// promisified below //
//////////////////////////////////////


const pwriteNum = (num) => {
  const test = `/test${num}`;
  fs.writeFile(`${test}.txt`, `${test}`, function(writeErr) {
    console.log(`wrote ${test}`);
  });
};

const preadNum = (num) => {
  const test = `/test${num}`;
  fs.readFile(`${test}.txt`, (readErr, contents) => {
    console.log(contents.toString());
  });
};

const pwriteAndRead = () => {
  fs.writeFile('/test3.txt', 'text3', function(writeerr) {
    fs.readFile('/test2.txt', function(readerr, contents) {
      console.log(contents.toString());
    });
  });
};

const preadDir = (dir) => {
  pfs.readdirAsync(dir)
  .then(fileNamesArr => {
    console.log(fileNamesArr);
  })
  .catch(err => {
    console.log('pread failed', err);
  });
};

const logGet = (dir) => {
  getAllFiles(dir)
  .then(fileStats => {
    console.log(fileStats);
  });
};

const returnGet = (dir) => {
  return getAllFiles(dir)
  .then(files => files);
};

// code, snapshots, selectSnapshot, files 
class MainView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    return getAllFiles('/');
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>NAVBAR</h1>
          </div>
          <button id="write1" type="button" onClick={() => writeNum('1')} > write1 </button>
          <button id="write2" type="button" onClick={() => writeNum('2')} > write2 </button>
          <button id="read1" type="button" onClick={() => readNum('1')} > read1 </button>
          <button id="read2" type="button" onClick={() => readNum('2')} > read2 </button>
          <button id="read" type="button" onClick={() => readDir('/')} > dir </button>
        </div>
        <div>
          <h5>Promisified buttons</h5>
          <button id="write1" type="button" onClick={() => writeNum('1')} > write1 </button>
          <button id="write2" type="button" onClick={() => writeNum('2')} > write2 </button>
          <button id="read1" type="button" onClick={() => readNum('1')} > read1 </button>
          <button id="read2" type="button" onClick={() => readNum('2')} > read2 </button>
          <button id="read" type="button" onClick={() => preadDir('/')} > dir </button>
          <button id="get" type="button" onClick={() => logGet('/')} > get </button>
        </div>
        {/*<FileTree files={this.props.files} /> */}
        <div className="row">
          <div className="col-md-3">
            <Sidebar snapshots={this.props.snapshots} selectSnapshot={this.props.selectSnapshot} />
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
  }
}
const mapStateToProps = ({ code, snapshots, selectSnapshot }) => ({
  code: 'class test{};',
  snapshots: { list: [], 
               selected: {}},
  // files: getAllFiles('/')
});

const mapDispatch = dispatch => ({
  selectSnapshot: () => {console.log('Select SNAPSHOT!!!');}
});

export default connect(mapStateToProps, mapDispatch)(MainView);

