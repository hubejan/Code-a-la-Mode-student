import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Flexbox from 'flexbox-react';

/* realistically probably want a min length on question? */
const FileRequest = ({ handleChange, handleSubmit, inputValue }) => {
  return (
    <Flexbox>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="fileReq"
          onChange={handleChange}
          value={inputValue}
          placeholder="enter something like /folder/...filename.js"
        />
        <RaisedButton type="submit" disabled={inputValue.length === 0} >
          SEND
        </RaisedButton>
        <p>
          If you don't have /input.js in your ROOT directory, go into the client/src/containers/FileRequestContainer.js and change inputValue to be whatever file path you want to request from your own computer (like /home/hubert/test.js)
        </p>
      </form>
    </Flexbox>
  );
};

export default FileRequest;
