import { RECEIVE_LIVECODE, SET_PATH } from '../constants';
import io from 'socket.io-client';
import { exists } from '../utils/file-functions';

export const getLiveCode = code => ({
  type: RECEIVE_LIVECODE, code
});
export const setRequestedPath = path => ({ type: SET_PATH, path });

export const loadFile = (dispatch, socket) => {
  socket.on('fileContents', data => dispatch(getLiveCode(data)));
  console.log('should have just dispatched livecode data');
};

export const storeFilePath = (socket, selectedFile) =>
dispatch => {
  console.log('selected file: ', selectedFile);
  // const relativePath = selectedFile.filePath.split('/').slice(-depth).join('');
  socket.emit('fileReq', selectedFile.filePath);
  return dispatch(setRequestedPath(selectedFile.filePath));
};
