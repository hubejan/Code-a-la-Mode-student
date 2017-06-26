import { RECEIVE_SNAPSHOT, RECEIVE_SNAPSHOTS, SET_SELECTED_SNAPSHOT } from '../constants';

const initialSnapshotsState = {
  selected: {},
  list: [],
};

export default function (state = initialSnapshotsState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {

    case RECEIVE_SNAPSHOTS:
      newState.list = action.snapshots;
      break;

    case RECEIVE_SNAPSHOT:
      newState.list =  [...state, action.snapshot];
      break;

    case SET_SELECTED_SNAPSHOT:
      newState.selected = action.snapshot;
      break;

    default:
      return state;
  }
  return newState;
}

