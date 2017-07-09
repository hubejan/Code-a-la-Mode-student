import React, { Link, Component } from 'react';
import { connect } from 'react-redux';
import fs from 'fs';
import Flexbox from 'flexbox-react';
import SplitPane from 'react-split-pane';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import CodeView from './CodeView';
import Navbar from './Navbar';
import store from '../store';
import FileTreeContainer from '../containers/FileTreeContainer';
import colors from '../public/colors';

const titleStyles = {
  // a cool font could be nice- using Bones default to match student for now
  position: 'absolute',
  top: '10%',
  fontFamily: 'Monaco',
  fontSize: '35px',
  alignItems: 'center'
};

const style = {
  margin: 12,
};

class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  componentDidMount() {
    const { socket } = this.props;

    // can attach any additional listeners here
    // editor listener is currently inside CodeView, but can optionally be moved here
  }

  render() {
    const { snapshots, selectSnapshot, socket, requestedFilePath } = this.props;
    return (

      <Flexbox display="flex" flexDirection="row" flexGrow={1} flexWrap="wrap" marginTop="auto" marginBottom="auto" width="100vw" maxHeight="100vh">
        <AppBar style={{ width: '100%' }} showMenuIconButton={false}>
            <div style={titleStyles}>
              <span style={{ color: colors.cyan }}>Code </span>
              <span style={{ color: colors.green }}>à </span>
              <span style={{ color: colors.orange }}>la </span>
              <span style={{ color: colors.magenta }}>Mode</span>
            </div>
        </AppBar>
            <Paper style={style} zDepth={2} >
              <FileTreeContainer directory={'/'} socket={socket} />
            </Paper>
            <Paper style={style} zDepth={5} >
              <CodeView socket={socket} requestedFilePath={requestedFilePath} />
            </Paper>
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
