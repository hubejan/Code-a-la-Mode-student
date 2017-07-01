/* Dependencies */
import { combineReducers } from 'redux';

/* Import Other Reducers */
import dummyReducer from './dummy';
import userReducer from './user';
import snapshotsReducer from './snapshots-reducer';
import liveCodeReducer from './liveCode-reducer';
import fileTree from './file-tree.js';
import room from './room-reducer';


/* Combine & Export Reducers to Store */
export default combineReducers({
  liveCodeReducer,
  snapshotsReducer,
  dummyReducer,
  userReducer,
  fileTree,
  room
});
