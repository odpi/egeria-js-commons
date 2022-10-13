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