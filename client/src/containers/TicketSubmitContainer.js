import React, { Component } from 'react';
import TicketSubmit from '../components/TicketSubmit';

export default class TicketSubmitContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ inputValue: evt.target.value });
  }

  handleSubmit(evt) {
    // need to figure out how to send code from here...
    // ticket ID is attached on teacher-side
    // may need to do some string processing to turn question into branch name
    evt.preventDefault();
    this.props.socket.emit('newTicket', { question: this.state.inputValue });
    this.setState({ inputValue: '' });
  }

  render() {
    return (
      <div>
        <TicketSubmit
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.inputValue}
        />
      </div>
    );
  }
}
