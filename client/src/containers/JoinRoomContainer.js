import React, { Component } from 'react';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react';

import DownloadFile from 'material-ui/svg-icons/file/file-download';
import IconButton from 'material-ui/IconButton';

import JoinRoom from '../components/JoinRoom';
import Loading from '../components/Loading';
import Logo from '../components/Logo';
import { cyan, green, orange, magenta } from '../public/colors';

const titleStyles = {
  fontFamily: 'Monaco',
  fontSize: '50px',
  fontWeight: '600'
};

const outerStyles = {
  display: 'flex',
  maxHeight: '100vh',
  minWidth: '100vw'
};

const instructorStyles = {
  color: 'whitesmoke',
  fontFamily: 'Monaco',
  fontSize: '22px'
};

const buttonStyles = {
  width: 120,
  height: 120,
  padding: 30,
};

const iconStyle = {
  width: 60,
  height: 60
};

class JoinRoomContainer extends Component {
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
    evt.preventDefault();
    this.props.joinRoom(this.state.inputValue);
    this.setState({ inputValue: '' });
  }

  render() {
    const { validating, attempted } = this.props;
    return (
      <Flexbox
        style={outerStyles}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Logo />
        <div style={titleStyles}>
          {/* just rando colors for now s T y L e Z */}
          <span style={{ color: cyan }}>Code </span>
          <span style={{ color: green }}>à </span>
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
        <Flexbox
          style={instructorStyles}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <h4>Are you an instructor?</h4>
          <h4>Download the app!</h4>
          <IconButton
            style={buttonStyles}
            iconStyle={iconStyle}
            onTouchTap={() => console.log('download app')}
          >
            <DownloadFile color={green} />
          </IconButton>
        </Flexbox>
      </Flexbox>
    );
  }
}

const mapStateToProps = (state) => ({
  validating: state.room.attempting,
  attempted: state.room.attempted
});


export default connect(mapStateToProps)(JoinRoomContainer);
