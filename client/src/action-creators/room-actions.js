import io from 'socket.io-client';
export const JOIN_ROOM = 'JOIN_ROOM';
export const LEAVE_ROOM = 'LEAVE_ROOM';

export function setSocket(ipAddress) {
  return { type: JOIN_ROOM, socket: io(ipAddress) };
}

export function disconnect() {
  return { type: LEAVE_ROOM };
}
