import { logout } from './logout';

export function handleResponse(response: any) {
  if (!response.ok) {
    if ([401, 403].indexOf(response.status) !== -1) {
      logout();
    }

    if ([500, 501, 502, 503, 504].indexOf(response.status) !== -1) {
      const event = new CustomEvent('EGERIA_API_ERROR', { 'detail': response });

      document.dispatchEvent(event);
    }

    return Promise.reject(response);
  }

  return response;
}
