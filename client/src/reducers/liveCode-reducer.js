import { RECEIVE_LIVECODE } from '../constants';

const initialLiveCodeState = {
  code: '',
};

export default function (state = initialLiveCodeState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {

    case RECEIVE_LIVECODE:
      newState.code = action.code;
      break;

    default:
      return state;
  }
  return newState;
}

