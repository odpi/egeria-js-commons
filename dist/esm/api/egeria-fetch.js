import { handleResponse } from '../auth';
const egeriaFetch = (endpoint, method, headers, options) => {
    const requestOptions = Object.assign({ method: method, headers: headers }, options);
    const apiUrl = process.env.REACT_APP_API_URL || '';
    return fetch(`${apiUrl}${endpoint}`, requestOptions).then(handleResponse);
};
export { egeriaFetch };
