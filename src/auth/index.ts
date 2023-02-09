import { authHeader, authHeaderWithContentType } from './auth-header';
import { currentJwt } from './current-jwt';
import { getSub } from './get-sub';
import { handleResponse } from './handle-response';
import { hasComponent } from './has-component';
import { hasTab } from './has-tab';
import { login } from './login';
import { logout } from './logout';
import { parseJwt } from './parse-jwt';
import { setToken } from './set-token';

export {
  authHeader,
  authHeaderWithContentType,
  currentJwt,
  getSub,
  handleResponse,
  hasComponent,
  hasTab,
  login,
  logout,
  parseJwt,
  setToken
}