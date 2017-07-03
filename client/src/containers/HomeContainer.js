import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainView from '../components/MainView';
import JoinRoom from '../containers/JoinRoomContainer';
import { setSocket, disconnect, validating, failed } from '../action-creators/room-actions';
import io from 'socket.io-client';

const HomeContainer = ({ socket, joinRoom, leaveRoom }) => socket
  ? <MainView socket={socket} leaveRoom={leaveRoom} />
  : <JoinRoom joinRoom={joinRoom} />

const mapStateToProps = (state) => ({ socket: state.room.socket });

const mapDispatchToProps = (dispatch) => {
  return {
    joinRoom: (ip) => {
      const socket = io(ip);
      dispatch(validating());

      setTimeout(() => {
        if (socket.connected) return dispatch(setSocket(socket));
        socket.close();
        return dispatch(failed());
      }, 1000);
    },
    leaveRoom: () => dispatch(disconnect())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
