import { JWTInterface, token } from '../token';

export const hasComponent = (component: string) => {
  const _token = token.getValue();

  if(_token) {
    const decodedToken: JWTInterface | null = token.decodedObject();

    const visibleComponents = decodedToken ? decodedToken.visibleComponents : [];

    return visibleComponents.includes('*')
            || visibleComponents.includes(component);
  }

  return false;
}
