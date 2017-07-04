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
          type="pre"
          multiLine={true}
          rows={1}
          rowsMax={4}
          name="Ticket"
          onChange={handleChange}
          value={inputValue}
          placeholder="Submit a help ticket!"
          style={{fontSize: '10'}}
        />
        <RaisedButton type="submit" disabled={inputValue.length === 0} >
          SEND
        </RaisedButton>
      </form>
    </Flexbox>
  );
};

export default TicketSubmit;
