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

const writeNum = (num) => {
  const test = `/OHMYGOD/test${num}`;
  fs.writeFile(`${test}.txt`, `${test}`, function(writeErr) {
    console.log(`wrote ${test}`);
  });
  fs.mkdir(`OHMYGOD`, function(writeErr) {
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

const logGet = (dir) => {
  getAllFiles(dir)
  .then(fileStats => {
    console.log(fileStats);
  });
};

class MainView extends Component {
  componentDidMount() {
    const { socket } = this.props;
    // can attach any additional listeners here
    // editor listener is currently inside CodeView, but can optionally be moved here
  }

  render() {
    const { snapshots, selectSnapshot, socket } = this.props;
    return (
      <div>
        <FileTree directory={'/'} />
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
          <div className="row">
            <div className="col-md-3">
              <Sidebar snapshots={snapshots} selectSnapshot={selectSnapshot} />
            </div>
            <div className="col-md-9">
              <h1>Lecture</h1>
              <div className="row">
                <CodeView socket={socket} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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

