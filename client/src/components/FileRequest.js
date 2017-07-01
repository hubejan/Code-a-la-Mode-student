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
          placeholder="Submit a file request!"
        />
        <button type="submit" disabled={inputValue.length === 0} >
          SEND
        </button>
      </form>
    </div>
  );
};

export default FileRequest;
