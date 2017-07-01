import React from 'react';

/* realistically probably want a min length on question? */
const FileRequest = ({ handleChange, handleSubmit, inputValue }) => {
  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          placeholder="enter something like /folder/...filename.js"
        />
        <button type="submit" disabled={inputValue.length === 0} >
          SEND
        </button>
      </form>
          If you don't have /input.js in your ROOT directory, go into the client/src/containers/FileRequestContainer.js and change inputValue to be whatever file path you want to request from your own computer (like /home/hubert/test.js)
    </div>
  );
};

export default FileRequest;
