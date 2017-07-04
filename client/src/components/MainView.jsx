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
      <Flexbox display="flex" flexDirection="row" flexGrow={1} flexWrap="wrap" marginTop="auto" marginBottom="auto" width="100vw">

          <AppBar title="Code-a-la-Mode" style={{ width: '100%' }} />

          {/*<div> ONE </div>*/}


            <Paper style={style} zDepth={2} >
              <FileTreeContainer directory={'/'} socket={socket} />
            </Paper>

          <Flexbox height="70%">
            <Paper style={style} zDepth={5} >
              <CodeView socket={socket} />
            </Paper>
          </Flexbox>

            <Drawer width={200} openSecondary={Boolean(true)} open={Boolean(true)} >
              <AppBar title="Tickets" />
            </Drawer>

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

