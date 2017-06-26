import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/solarized_dark';
import io from 'socket.io-client';

export default class CodeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      data: '',
    };
  }

  componentDidMount() {
    this.setState({ socket: io('172.16.21.52:3030') },
                  () => { this.state.socket.on('editorChanges',
                                                data => { this.setState({data}); }
                                               );
                        }
                 );
  }

  render() {
    return (
      <div>
          <h3>Sourcecode:</h3>
          <AceEditor value={this.state.data} mode="javascript" theme="solarized_dark" />
      </div>
    );
  }
}
