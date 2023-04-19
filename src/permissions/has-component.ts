import { JWTInterface, token } from '../token';

export const hasComponent = (component: string) => {
  const _token = token.getValue();

  if(_token) {
    try {
      const decodedToken: JWTInterface | null = token.decodedObject();

      const visibleComponents =
        decodedToken && decodedToken.visibleComponents
          ? decodedToken.visibleComponents
          : [];

      return visibleComponents.includes('*')
              || visibleComponents.includes(component);
    } catch(e) {
      return false;
    }
  }

  return false;
}
