import io from 'socket.io-client';

import { RECEIVE_LIVECODE, SET_PATH } from '../constants';
import { fstat } from '../utils/file-functions';

export const getLiveCode = code => ({
  type: RECEIVE_LIVECODE, code
});
export const setRequestedPath = path => ({ type: SET_PATH, path });

// export const loadFile = (dispatch, socket) => {
//   socket.on('fileContents', data => dispatch(getLiveCode(data)));
//   console.log('should have just dispatched livecode data');
// };

export const storeFilePath = (socket, selectedFile) =>
dispatch => {
  console.log('selected file: ', selectedFile);

  // ___ This commented code was work towards checking the FS to see if file exists
  // before unnecessarily sending a request for file contents.

  // fstat(selectedFile)
  //   .then((err, fStat) => {
  //     console.log('fstat: ', fStat);
  //     if (err) console.error(err);
  //     else if (!fStat) {
        socket.emit('fileReq', selectedFile.filePath);
        return dispatch(setRequestedPath(selectedFile.filePath));
    //   }
    // })
    // .catch(console.error);
};
