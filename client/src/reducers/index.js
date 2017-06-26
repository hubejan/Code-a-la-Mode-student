/* Dependencies */
import { combineReducers } from 'redux';

/* Import Other Reducers */
import dummyReducer from './dummy';
import userReducer from './user';
import snapshotsReducer from './snapshots-reducer';


/* Combine & Export Reducers to Store */
export default combineReducers({
  snapshotsReducer,
  dummyReducer,
  userReducer
});
