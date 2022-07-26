import { handleResponse } from '../auth';

const egeriaFetch = (endpoint: string, method : string, headers : any, options: any) => {
  const requestOptions: any = {
    method: method,
    headers: headers,
    ...options
  };

  const apiUrl = process.env.REACT_APP_API_URL || '';

  return fetch(`${apiUrl}${endpoint}`, requestOptions).then(handleResponse);
}

export {
  egeriaFetch
};