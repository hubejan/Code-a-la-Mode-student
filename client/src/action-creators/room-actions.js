export const JOIN_ROOM = 'JOIN_ROOM';
export const LEAVE_ROOM = 'LEAVE_ROOM';

export function setSocket(ipAddress) {
  return { type: JOIN_ROOM, socket: ipAddress };
}

export function disconnect() {
  return { type: LEAVE_ROOM };
}
