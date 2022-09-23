import { logout } from './logout';
export function handleResponse(response) {
    if (!response.ok) {
        if ([401, 403].indexOf(response.status) !== -1) {
            logout();
        }
        return Promise.reject();
    }
    return response;
}
