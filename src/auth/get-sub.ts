import { currentJwt } from './current-jwt';
import { parseJwt } from './parse-jwt';

export const getSub = () => {
  const token = currentJwt();

  if (token !== undefined && token !== null) {
    return JSON.parse(parseJwt(token).sub);
  }

  return null;
}
