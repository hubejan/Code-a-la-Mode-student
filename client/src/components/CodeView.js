import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/solarized_dark';
import io from 'socket.io-client';
import Sidebar from './Sidebar';

export default class CodeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      data: '',
    };
      //Brian's IP from 11th floor 172.16.21.52:3030
      //                25th floor 172.16.25.125:3030
}

  componentDidMount() {
    this.setState({ socket: io('172.16.25.109:3030') },
                  () => { this.state.socket.on('editorChanges',
                                                data => { this.setState({data}); }
                                               );
                        }
                 );
  }

  render() {
    const snapshots = {
      list: [{id: 1, name: 'Snapshot 1'}, {id: 2, name: 'Snapshot 2'}, {id: 3, name: 'Snapshot 3'}]
    }
    const selectSnapshot = (snapshot) => console.log(`Select snapshot: ${snapshot}`);

    return (
      <div>
          <div>
            <button id="first" type="button" >First</button>
            <button id="prev" type="button" >Prev</button>
            <button id="makeSnapshot" type="button" >Snapshot</button>
            <button id="next" type="button" >Next</button>
            <button id="last" type="button" >Last</button>
          </div>
          <AceEditor value={this.state.data} mode="javascript" theme="solarized_dark" />
      </div>
    );
  }
}
