import {
  handleResponse,
  authHeader
} from '../auth';

const egeriaFetch = (endpoint: string, method : string, headers : any, options: any) => {
  const requestOptions: any = {
    method: method,
    headers: headers,
    ...options
  };

  const apiUrl = process.env.REACT_APP_API_URL || '';

  return fetch(`${apiUrl}${endpoint}`, requestOptions).then(handleResponse);
}

/*
 * @param uri is the full URL
 * @param method usual fetch methods such as 'GET', 'POST', etc.
 * @param callback this is an optional callback function that can be used
 *                 in a different context to get the response and manage it
 *                 in a custom manner
 * @returns
 */
const fetchData = async (uri: string, method: string, callback?: Function) => {
  const res = await egeriaFetch(uri, method, {...authHeader()}, {});
  const data = await res.json();

  if(callback) {
    callback(data);
  } else {
    return data;
  }
};

export {
  egeriaFetch,
  fetchData
};