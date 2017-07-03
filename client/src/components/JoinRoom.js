import React from 'react';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import Flexbox from 'flexbox-react';

const flexboxStyles = {
  minHeight: '100vh',
  minWidth: '100vw'
}
const formStyles = {
  marginBottom: '10%',
  width: '60%'
}

const textStyles = {
  fontSize: '22px',
  width: '100%',
  textAlign: 'center'
}

const JoinRoom = ({ handleChange, handleSubmit, inputValue }) => {
  return (
    <Flexbox style={flexboxStyles} justifyContent="center" alignItems="center">
      <form style={formStyles} onSubmit={handleSubmit}>
        <TextField
          className="loginInput"
          style={textStyles}
          id="text-field-default"
          onChange={handleChange}
          value={inputValue}
          placeholder="Join a Room!"
        />
      </form>
    </Flexbox>
  );
}

export default JoinRoom;
