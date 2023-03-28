import { currentJwt } from "./current-jwt";

export function authHeader() {
  const _currentJwt = currentJwt();

  if (_currentJwt) {
    return { "Authorization": `Bearer ${_currentJwt}` };
  } else {
    return {};
  }
}

export function authHeaderWithContentType() {
  const _currentJwt = currentJwt();

  if (_currentJwt) {
    return {
      "Content-type": "application/json",
      "accept" : "application/json",
      "Authorization": `Bearer ${_currentJwt}`
    };
  } else {
    return {};
  }
}
