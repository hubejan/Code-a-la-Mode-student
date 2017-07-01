import React, { Component } from 'react';
import JoinRoom from '../components/JoinRoom';

export default class JoinRoomContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'localhost:3030'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ inputValue: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // need a way to validate whether IP is valid?
    // maybe we can set up a 'ping' functionality?
    // if ping gets success from teacher, join
    // if error, keep them on the IP enter page
    this.props.joinRoom(this.state.inputValue);
    this.setState({ inputValue: '' });
  }

  render() {
    return (
      <div>
        <JoinRoom
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.inputValue}
        />
      </div>
    );
  }
}
