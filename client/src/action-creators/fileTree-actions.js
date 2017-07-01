import { RECEIVE_LIVECODE,  } from '../constants';
import io from 'socket.io-client';

export const getLiveCode = code => ({
  type: RECEIVE_LIVECODE, code
});

export const loadFile = (dispatch, socket) => {
  socket.on('fileContents', data => dispatch(getLiveCode(data)));
  console.log('should have just dispatched livecode data');
};
