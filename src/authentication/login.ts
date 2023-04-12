import { API_LOGIN_PATH } from '../api/routes';
import { API_URL } from '../commons/constants';
import { token } from '../token';

export const login = (username: string, password: string) => {
  const requestOptions = {
    method: 'POST',
    body: new URLSearchParams(`username=${username}&password=${password}`)
  };

  let res;

  return fetch(`${API_URL}${API_LOGIN_PATH}`, requestOptions)
    .then(response => {
      res = response;
      return response.text();
    })
    .then((data) => {
      token.setValue(data);
    })
    .then(() => res);
};

