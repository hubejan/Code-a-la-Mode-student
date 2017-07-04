import React, { Link, Component } from 'react';
import { connect } from 'react-redux';
import fs from 'fs';
import Flexbox from 'flexbox-react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import CodeView from './CodeView';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import store from '../store';
import FileTreeContainer from '../containers/FileTreeContainer';
import { getAllFiles } from '../utils/file-functions';

const writeNum = (num) => {
  const test = `/OMG${folder}/test${num}`;
  fs.writeFile(`${test}.txt`, `${test}`, function(writeErr) {
    console.log(`wrote ${test}.txt`);
  });
};
const writeFolder = () => {
  folder = Math.floor(Math.random()*100);
  fs.mkdir(`OMG${folder}`, function(writeErr) {
    console.log(`wrote OMG${folder}`);
  });
};

const readNum = (num) => {
  const test = `/test${num}`;
  fs.readFile(`${test}.txt`, (readErr, contents) => {
    console.log(contents.toString());
  });
};

const writeAndRead = () => {
  fs.writeFile('/test3.txt', 'text3', function (writeerr) {
    fs.readFile('/test2.txt', function (readerr, contents) {
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

const style = {
  margin: 12,
};

class MainView extends Component {
  componentDidMount() {
    const { socket } = this.props;
    this.state = { open: false };
    // can attach any additional listeners here
    // editor listener is currently inside CodeView, but can optionally be moved here
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    const { snapshots, selectSnapshot, socket, requestedFilePath } = this.props;
    return (
      <Flexbox display="flex" flexDirection="column" flexGrow={1} minWidth="100vw">
        <Flexbox flexDirection="row" flexWrap="wrap" width="100vw">
          <AppBar title="Code-a-la-Mode" iconClassNameRight="muidocs-icon-navigation-expand-more">
          </AppBar>
        </Flexbox>
        <Flexbox element="main" flexDirection="row" flexWrap="wrap">
          <Flexbox element="aside" flexGrow={3} >
            <Paper style={style} zDepth={2} >
              <FileTreeContainer directory={'/'} socket={socket} />
            </Paper>
          </Flexbox>
          <Flexbox flexGrow={3}>
            <Paper style={style} zDepth={5} >
              <CodeView socket={socket} />
            </Paper>
          </Flexbox>
          <Flexbox>
            <Drawer width={200} openSecondary={Boolean(true)} open={Boolean(true)} >
              <AppBar title="Tickets" />
            </Drawer>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    );
  }
}

const mapStateToProps = ({ code, snapshots, selectSnapshot, fileTree }) => ({
  code: 'class test{};',
  snapshots: {
    list: [],
    selected: {}
  },
  requestedFilePath: fileTree.requestedFilePath
});

const mapDispatch = dispatch => ({
  selectSnapshot: () => {console.log('Select SNAPSHOT!!!');}
});

export default connect(mapStateToProps, mapDispatch)(MainView);

