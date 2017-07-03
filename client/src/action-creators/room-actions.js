import io from 'socket.io-client';
export const JOIN_ROOM = 'JOIN_ROOM';
export const LEAVE_ROOM = 'LEAVE_ROOM';
export const ATTEMPT_JOIN = 'ATTEMPT_JOIN';
export const ATTEMPT_FAILED = 'ATTEMPT_FAILED';

export function setSocket(socket) {
  return { type: JOIN_ROOM, socket };
}

export function disconnect() {
  return { type: LEAVE_ROOM };
}

export function validating() {
  return { type: ATTEMPT_JOIN };
}

export function failed() {
  return { type: ATTEMPT_FAILED };
}