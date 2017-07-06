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
          <Flexbox flexDirection="row">
            <button id="first" type="button" >First</button>
            <button id="prev" type="button" >Prev</button>
            <button id="makeSnapshot" type="button" >Snapshot</button>
            <button id="next" type="button" >Next</button>
            <button id="last" type="button" >Last</button>
          </Flexbox>
          <Flexbox flexDirection="column">
            <TicketSubmitContainer socket={this.props.socket} />
          </Flexbox>
          <Flexbox>
            <Paper style={style} zDepth={5} >
              <AceEditor
                value={this.state.data}
                mode="javascript"
                theme="monokai"
                height="920"
                editorProps={{ $blockScrolling: Infinity }}
                showPrintMargin={false}
                defaultValue={` //      ,gggg,
//     ,88"""Y8b,                      8I
//    d8"     \`Y8                      8I
//   d8'   8b  d8                      8I
//  ,8I    "Y88P'                      8I
//  I8'             ,ggggg,      ,gggg,8I   ,ggg,
//  d8             dP"  "Y8ggg  dP"  "Y8I  i8" "8i
//  Y8,           i8'    ,8I   i8'    ,8I  I8, ,8I
//  \`Yba,,_____, ,d8,   ,d8'  ,d8,   ,d8b, \`YbadP'
//    \`"Y8888888 P"Y8888P"    P"Y8888P"\`Y8888P"Y888
//
//     ,gggg,gg
//    dP"  "Y8I
//   i8'    ,8I
//   d8,   ,d8b,
//   "Y8888P"\`Y8
//
//   ,dPYb,
//   IP'\`Yb
//   I8  8I
//   I8  8'
//   I8 dP    ,gggg,gg
//   I8dP    dP"  "Y8I
//   I8P    i8'    ,8I
//  ,d8b,_ ,d8,   ,d8b,
//  8P'"Y88P"Y8888P"\`Y8
//
//   ,ggg, ,ggg,_,ggg,
//  dP""Y8dP""Y88P""Y8b                       8I
//  Yb, \`88'  \`88'  \`88                       8I
//   \`"  88    88    88                       8I
//       88    88    88                       8I
//       88    88    88    ,ggggg,      ,gggg,8I   ,ggg,
//       88    88    88   dP"  "Y8ggg  dP"  "Y8I  i8" "8i
//       88    88    88  i8'    ,8I   i8'    ,8I  I8, ,8I
//       88    88    Y8,,d8,   ,d8'  ,d8,   ,d8b, \`YbadP'
//       88    88    \`Y8P"Y8888P"    P"Y8888P"\`Y8888P"Y888

`}
              />
            </Paper>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    );
  }
}
