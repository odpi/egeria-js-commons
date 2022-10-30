import { API_LOGIN_PATH } from '../api/routes';
import { API_URL } from '../commons/constants';
import { setToken } from './set-token';

export function login(username: string, password: string) {
  const requestOptions = {
    method: 'POST',
    body: new URLSearchParams(`username=${username}&password=${password}`)
  };

  return fetch(`${API_URL}${API_LOGIN_PATH}`, requestOptions)
    .then((response) => {
      if(response.ok) {
        const token = response.headers.get('x-auth-token');

        setToken(token);

        console.log("LOGGED IN");
      }

      return response;
    });
}
