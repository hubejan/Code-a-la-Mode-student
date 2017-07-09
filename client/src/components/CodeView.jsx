import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

import Flexbox from 'flexbox-react';
import Paper from 'material-ui/Paper';

import TicketSubmitContainer from '../containers/TicketSubmitContainer';
import { writeFile } from '../utils/file-functions';

const style = {
  margin: 12,
};

export default class CodeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: `
   .d8888b.   .d88888b.  8888888b.  8888888888
  d88P  Y88b d88P   Y88b 888   Y88b 888
  888    888 888     888 888    888 888
  888        888     888 888    888 8888888
  888        888     888 888    888 888
  888    888 888     888 888    888 888
  Y88b  d88P Y88b. .d88P 888  .d88P 888
    Y8888P     Y88888P   8888888P   8888888888



         d8888
        d88888
       d88P888
      d88P 888
     d88P  888
    d88P   888
   d8888888888
  d88P     888



  888             d8888
  888            d88888
  888           d88P888
  888          d88P 888
  888         d88P  888
  888        d88P   888
  888       d8888888888
  88888888 d88P     888



  888b     d888  .d88888b.  8888888b.  8888888888
  8888b   d8888 d88P   Y88b 888   Y88b 888
  88888b.d88888 888     888 888    888 888
  888Y88888P888 888     888 888    888 8888888
  888 Y888P 888 888     888 888    888 888
  888  Y8P  888 888     888 888    888 888
  888       888 Y88b. .d88P 888  .d88P 888
  888       888   Y88888P   8888888P   8888888888
`
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
      console.log(this.props.requestedFilePath, 'reqfilepath when receiving: ', data)
      writeFile(this.props.requestedFilePath, data)
        .then(err => {
          this.setState({ data });
          return err;
        })
        .catch(console.error);
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
      <Flexbox flexDirection="column" height="100%" width="60vw" >
        <Flexbox flexDirection="column" height="100%" >
          <Flexbox flexDirection="column">
            <TicketSubmitContainer socket={this.props.socket} />
          </Flexbox>
          <Flexbox>
            <Paper style={style} zDepth={5} >
              <AceEditor
                value={this.state.data}
                width="1000"
                mode="javascript"
                theme="monokai"
                height="920"
                wrapEnabled={Boolean(true)}
                editorProps={{ $blockScrolling: Infinity }}
                showPrintMargin={false}
                onLoad={(editor) => {
                  editor.getSession().setUseWorker(false)
                }}
              />
            </Paper>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    );
  }
}
