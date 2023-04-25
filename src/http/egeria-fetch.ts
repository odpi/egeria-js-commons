import { handleResponse, authHeader } from '../http';
import { API_URL, REQUEST_TIMEOUT } from '../commons/constants';
import { eNavigateTo } from '../events';

const egeriaFetch = (uri: string, method : string, headers : any, options: any) => {
  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();

    const event = new CustomEvent('EGERIA_API_ERROR', { 'detail': {'message': 'Request timed out.'} });
    document.dispatchEvent(event);
  }, REQUEST_TIMEOUT);

  const requestOptions: any = {
    method: method,
    headers: headers,
    signal: controller.signal,
    ...options
  };

  return fetch(`${API_URL}${uri}`, requestOptions).then((response: any) => {
    clearTimeout(timeoutId);

    return handleResponse(response);
  }).catch((error: any) => {
    clearTimeout(timeoutId);

    switch(error.toString()) {
      case 'TypeError: Failed to fetch': {
        eNavigateTo('/server-unavailable');

        const event = new CustomEvent('EGERIA_API_ERROR', {
          'detail': {
            status: 500,
            statusText: `The server is unavailable at the moment.`
          }
        });

        document.dispatchEvent(event);
        break;
      }
      default: {
        console.error(`Error:`, error);
      }
    }
  });
}

/*
 * @param uri is the full URL
 * @param method usual fetch methods such as 'GET', 'POST', etc.
 * @param callback this is an optional callback function that can be used
 *                 in a different context to get the response and manage it
 *                 in a custom manner
 * @returns
 */
const fetchData = async (uri: string, method: string, callback?: any) => {
  const res = await egeriaFetch(uri, method, {...authHeader()}, {});
  const data = await res ? res.json() : null;

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