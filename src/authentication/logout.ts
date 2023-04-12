import { token } from '../token';

export const logout = (logoutCallback?: Function) => {
  token.delete();

  console.log('TOKEN DELETED.');

  if (logoutCallback) {
    logoutCallback();
  }

  console.log('LOGGED OUT.');
};