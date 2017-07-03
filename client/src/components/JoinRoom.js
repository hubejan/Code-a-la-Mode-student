import React from 'react';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import { red, cyan, yellow } from '../public/colors';
import '../public/stylesheets/joinRoom.scss';

const formStyles = {
  marginBottom: '10%',
  width: '500px' // good size for as small as half-screen macbook air
}

const textFieldStyles = {
  fontSize: '30px',
  fontFamily: 'Monaco',
  width: '100%',
  padding: '0 0 5px 0',
  textAlign: 'center',
  errorStyle: { color: red },
  underlineFocusStyle: { color: cyan }
}

const inputStyles = {
  textAlign: 'center',
  color: yellow
}

// once we have a logo we can put a logo + header message on here?
const JoinRoom = ({ handleChange, handleSubmit, inputValue, validating, attempted }) => {
  const errorText = attempted ? 'Connection failed! Did you make a typo?' : '';

  return (
      <form style={formStyles} onSubmit={handleSubmit}>
        <TextField
          className="loginInput"  
          style={textFieldStyles}
          id="text-field-default"
          onChange={handleChange}
          value={inputValue}
          placeholder="Enter your teacher's IP"
          errorText={errorText}
          errorStyle={textFieldStyles.errorStyle}
          underlineFocusStyle={textFieldStyles.underlineFocusStyle}
          inputStyle={inputStyles}
        />
      </form>
  );
}

export default JoinRoom;
