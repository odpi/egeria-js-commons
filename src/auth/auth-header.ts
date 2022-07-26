import { currentJwt } from "./current-jwt";

export function authHeader() {
  const _currentJwt = currentJwt();

  if (_currentJwt) {
    return { "x-auth-token": _currentJwt };
  } else {
    return {};
  }
}

export function authHeaderWithContentType() {
  const _currentJwt = currentJwt();

  if (_currentJwt) {
    return {
      "x-auth-token": _currentJwt,
      "Content-Type": "application/json",
      "accept" : "application/json"
    };
  } else {
    return {};
  }
}
