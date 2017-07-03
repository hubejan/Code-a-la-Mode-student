import React, { Component } from 'react';
import { connect } from 'react-redux';
import JoinRoom from '../components/JoinRoom';
import Loading from '../components/Loading';
import Flexbox from 'flexbox-react';
import { cyan, green, orange, magenta } from '../public/colors';

const titleStyles = {
  // a cool font could be nice- using Bones default to match student for now
  position: 'absolute',
  top: '10%',
  fontFamily: 'Monaco',
  fontSize: '50px'
}

class JoinRoomContainer extends Component {
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
    this.props.joinRoom(this.state.inputValue);
    this.setState({ inputValue: '' });
  }

  render() {
    const { validating, attempted } = this.props;
    const flexboxStyles = { display: 'flex', minHeight: '100vh', minWidth: '100vw' };

    return (
      <Flexbox style={flexboxStyles} justifyContent="center" alignItems="center">
        <div style={titleStyles}>
          {/* just rando colors for now s T y L e Z */}
          <span style={{ color: cyan }}>Code </span>
          <span style={{ color: green }}>a </span>
          <span style={{ color: orange }}>la </span>
          <span style={{ color: magenta }}>Mode</span>
        </div>
        {
          validating
          ? <Loading />
          : <JoinRoom
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            inputValue={this.state.inputValue}
            attempted={attempted}
          />
        }
      </Flexbox>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    validating: state.room.attempting,
    attempted: state.room.attempted
  }
}

export default connect(mapStateToProps)(JoinRoomContainer);
