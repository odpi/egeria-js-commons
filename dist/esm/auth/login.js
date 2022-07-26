import { setToken } from './set-token';
export function login(username, password, apiUrl) {
    const requestOptions = {
        method: 'POST',
        body: new URLSearchParams(`username=${username}&password=${password}`)
    };
    return fetch(`${apiUrl}`, requestOptions)
        .then((response) => {
        if (response.ok) {
            const token = response.headers.get('x-auth-token');
            setToken(token);
            console.log("LOGGED IN");
        }
        return response;
    });
}
