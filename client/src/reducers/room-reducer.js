import { JOIN_ROOM, LEAVE_ROOM, ATTEMPT_JOIN, ATTEMPT_FAILED } from '../action-creators/room-actions';

const defaultState = {
  socket: null,
  attempting: false,
  attempted: false
};

export default function roomReducer(state = defaultState, action) {
  switch (action.type) {
    case JOIN_ROOM:
      return { ...state, socket: action.socket, attempting: false, attempted: true };
    case ATTEMPT_JOIN:
      return { ...state, attempting: true };
    case ATTEMPT_FAILED:
      return { ...state, attempting: false, attempted: true };
    case LEAVE_ROOM:
      return { ...state, socket: null, attempted: false };
    default:
      return state;
  }
}