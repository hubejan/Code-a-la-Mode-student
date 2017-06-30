import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainView from '../components/MainView';
import JoinRoom from '../components/JoinRoom';

const Home = ({ socket }) =>
  socket
    ? <MainView leaveRoom={leaveRoom} /> 
    : <JoinRoom joinRoom={joinRoom} />

const mapStateToProps = (state) => {
  return {
    socket: state.socket;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    joinRoom: (ip) => dispatch(setSocket(ip)),
    leaveRoom: () => dispatch(disconnect())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
