import React, { Component } from 'react';
import FileRequest from '../components/FileRequest';

export default class FileRequestContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '/test.js'
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
    this.props.socket.emit('fileReq', this.state.inputValue);
    //this.setState({ inputValue: '' });
  }

  render() {
    return (
      <div>
        <FileRequest
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.inputValue}
        />
      </div>
    );
  }
}
