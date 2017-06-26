import { RECEIVE_LIVECODE } from '../constants';
import io from 'socket.io-client';

export const getLiveCode = code => ({
  type: RECEIVE_LIVECODE, code
});

export const createSocketConnection = () => {
  const socket = io('172.16.21.52:3030');
  return socket;
};

export const loadLiveCode = (dispatch, socket) => {
  socket.on('editorChanges', data => dispatch(getLiveCode(data)));
};

