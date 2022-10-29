import { API_URL } from '../commons/constants';
import { setToken } from './set-token';
export function login(username, password, apiUrl) {
    const requestOptions = {
        method: 'POST',
        body: new URLSearchParams(`username=${username}&password=${password}`)
    };
    return fetch(`${apiUrl ? apiUrl : API_URL}`, requestOptions)
        .then((response) => {
        if (response.ok) {
            const token = response.headers.get('x-auth-token');
            setToken(token);
            console.log("LOGGED IN");
        }
        return response;
    });
}
