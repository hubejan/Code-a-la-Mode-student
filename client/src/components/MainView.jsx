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
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import store from '../store';
import FileTreeContainer from '../containers/FileTreeContainer';


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

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    const { snapshots, selectSnapshot, socket, requestedFilePath } = this.props;
    return (

      <Flexbox display="flex" flexDirection="row" flexGrow={1} flexWrap="wrap" marginTop="auto" marginBottom="auto" width="100vw" maxHeight="100vh">
          <AppBar title="Code-a-la-Mode" style={{ width: '100%'}} />
          {/*<div> ONE </div>*/}
            <Paper style={style} zDepth={2} >
              <FileTreeContainer directory={'/'} socket={socket} />
            </Paper>
          <Flexbox height="50%">
            <RaisedButton
              label="Toggle Drawer"
              onTouchTap={this.handleToggle}
            />
            <Paper style={style} zDepth={5} >
              <CodeView socket={socket} requestedFilePath={requestedFilePath} />
            </Paper>
          </Flexbox>

              <Drawer width={200} openSecondary={Boolean(true)} open={this.state.open} >

                <Sidebar />
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

