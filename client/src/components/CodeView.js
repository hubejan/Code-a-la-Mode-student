import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/solarized_dark';
import Flexbox from 'flexbox-react';

import Sidebar from './Sidebar';
import TicketSubmitContainer from '../containers/TicketSubmitContainer';
import FileRequestContainer from '../containers/FileRequestContainer';
import { writeFile } from '../utils/file-functions';

export default class CodeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
    // Brian's IP from 11th floor 172.16.21.52:3030
    //                25th floor 172.16.25.125:3030
  }

  componentDidMount() {
    // Q from PK: should we just lift this up to the parent component?
    // we could make this component dumber by passing socket/data from above?
    this.props.socket.on('editorChanges', data => {
      this.setState({ data });
    });
    // Currently both receiving any requested files and receiving any editor changes
    // will change the contents of the text editor.
    // TODO: Need to setup something like multiple text editors (perhaps in tabs)
    this.props.socket.on('fileContents', data => {
      const requestedFilePath = this.props.requestedFilePath.split('/').slice(-1).join('');
      console.log('before writing to path: ', requestedFilePath);
      writeFile(requestedFilePath, data);
      return this.setState({ data });
    });
  }

  componentWillUnmount() {
    // socket.io docs are terrible
    // this removes all callbacks built via socket.on('editorChanges', cb)
    this.props.socket.removeAllListeners('editorChanges');
  }

  render() {
    const snapshots = {
      list: [{id: 1, name: 'Snapshot 1'}, {id: 2, name: 'Snapshot 2'}, {id: 3, name: 'Snapshot 3'}]
    };
    const selectSnapshot = (snapshot) => console.log(`Select snapshot: ${snapshot}`);

    return (
      <Flexbox flexDirection="column" minHeight="100vh" >
        <Flexbox flexDirection="column" minHeight="100vh" >
          <Flexbox flexDirection="row">
            <button id="first" type="button" >First</button>
            <button id="prev" type="button" >Prev</button>
            <button id="makeSnapshot" type="button" >Snapshot</button>
            <button id="next" type="button" >Next</button>
            <button id="last" type="button" >Last</button>
          </Flexbox>
          <Flexbox flexDirection="column">
            <TicketSubmitContainer socket={this.props.socket} />
            <FileRequestContainer socket={this.props.socket} />
          </Flexbox>
          <Flexbox>
            <AceEditor
              value={this.state.data}
              mode="javascript"
              theme="solarized_dark"
              editorProps={{ $blockScrolling: Infinity }}
            />
          </Flexbox>
        </Flexbox>
      </Flexbox>
    );
  }
}
