import React from 'react';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';


// dev note: this looks almost identical to TicketSubmit, as do the containers
// could probably refactor into a more generic component later
const JoinRoom = ({ handleChange, handleSubmit, inputValue }) => {
  return (
    <Dialog title="Join"
          modal={true}
          open={true}>
      <AppBar title="Code-a-la-Mode" iconClassNameRight="muidocs-icon-navigation-expand-more">
        <form onSubmit={handleSubmit}>
          <TextField
            id="text-field-default"
            onChange={handleChange}
            value={inputValue}
            placeholder="Ask your instructor for their IP Address"
          />
          <RaisedButton type="submit" disabled={inputValue.length === 0} >
            JOIN
          </RaisedButton>
        </form>
      </AppBar>
    </Dialog>
  );
}

export default JoinRoom;
