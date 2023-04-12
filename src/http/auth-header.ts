import { token } from '../token';

export function authHeader() {
  const _token = token.getValue();

  if (_token) {
    return { "Authorization": `Bearer ${_token}` };
  } else {
    return {};
  }
}

export function authHeaderWithContentType() {
  const _token = token.getValue();

  if (_token) {
    return {
      "Content-type": "application/json",
      "accept" : "application/json",
      "Authorization": `Bearer ${_token}`
    };
  } else {
    return {};
  }
}
