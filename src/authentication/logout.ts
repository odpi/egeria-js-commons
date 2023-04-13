import { eNavigateTo } from '../events';
import { LOGIN_PATH } from '../commons';
import { token } from '../token';

export const logout = (logoutCallback?: Function) => {
  token.delete();

  console.log('TOKEN DELETED.');

  if (logoutCallback) {
    logoutCallback();
  } else {
    eNavigateTo(LOGIN_PATH);
  }

  console.log('LOGGED OUT.');
};