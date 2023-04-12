import { currentJwt } from './current-jwt';
import { parseJwt } from './parse-jwt';

export const getSub = () => {
  const token = currentJwt();

  if (token !== undefined && token !== null && parseJwt(token).sub) {
    return JSON.parse(parseJwt(token).sub);
  }

  return null;
}
