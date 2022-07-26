export function setToken(token: any) {
  const _token = token || '';

  localStorage.setItem('currentJwt', _token);

  console.log('TOKEN SAVED');
}
