import { JOIN_ROOM, LEAVE_ROOM } from '../action-creators/room-actions';

const defaultState = {
  socket: null
};

export default function roomReducer(state = defaultState, action) {
  switch (action.type) {
    case JOIN_ROOM:
      return { socket: action.socket }
    case LEAVE_ROOM:
      return { socket: null }
    default:
      return state;
  }
}