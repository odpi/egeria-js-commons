export function setToken(token) {
    const _token = token || '';
    localStorage.setItem('currentJwt', _token);
    console.log('TOKEN SAVED');
}
