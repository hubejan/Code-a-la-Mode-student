import React from 'react';

// dev note: this looks almost identical to TicketSubmit, as do the containers
// could probably refactor into a more generic component later
const JoinRoom = ({ handleChange, handleSubmit, inputValue }) => {
  return (
    <div>
      <h2>MODE A LA CODE</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          placeholder="Ask your instructor for their IP Address"
        />
        <button type="submit" disabled={inputValue.length === 0} >
          JOIN
        </button>
      </form>
    </div>
  );
}