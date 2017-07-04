import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Flexbox from 'flexbox-react';

/* realistically probably want a min length on question? */
const TicketSubmit = ({ handleChange, handleSubmit, inputValue }) => {
  return (
    <Flexbox>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="Ticket"
          onChange={handleChange}
          value={inputValue}
          placeholder="Submit a help ticket!"
        />
        <RaisedButton type="submit" disabled={inputValue.length === 0} >
          SEND
        </RaisedButton>
      </form>
    </Flexbox>
  );
};

export default TicketSubmit;
