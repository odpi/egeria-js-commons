import { currentJwt } from './current-jwt';
import { getSub } from './get-sub';

export const hasComponent = (component: string) => {
  const token = currentJwt();

  if(token !== undefined && token !== null) {
    const visibleComponents = getSub().visibleComponents;

    return visibleComponents !== null && (
      visibleComponents.includes('*') ||
      visibleComponents.includes(component)
    );
  }

  return false;
}
