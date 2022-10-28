import { LOGIN_PATH } from '../commons';

export const logout = (logoutCallback?: Function) => {
  localStorage.removeItem('currentJwt');

  console.log('LOGGED OUT');

  if (logoutCallback) {
    logoutCallback();
  } else {
    window.location.href = LOGIN_PATH;
  }
}
