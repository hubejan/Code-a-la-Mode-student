import { JOIN_ROOM, LEAVE_ROOM } from '../action-creators/room-actions';

const defaultState = {
  socket: null
};

function roomReducer(state, action) {
  switch (action.type) {
    case JOIN_ROOM:
      return { ...state, socket: action.socket }
    case LEAVE_ROOM:
      return { ...state, socket: null }
    default:
      return state;
  }
}