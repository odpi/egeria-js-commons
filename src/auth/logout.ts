export const logout = (logoutCallback?: Function) => {
  localStorage.removeItem('currentJwt');

  console.log('LOGGED OUT');

  if (logoutCallback) {
    logoutCallback();
  }
}
