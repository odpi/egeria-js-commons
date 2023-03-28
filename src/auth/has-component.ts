import { currentJwt } from './current-jwt';
import { parseJwt } from './parse-jwt';

export const hasComponent = (component: string) => {

  const token = currentJwt();
  if(token !== undefined && token !== null){
    const visibleComponents = parseJwt(token).visibleComponents;

    return visibleComponents !== null && (
        visibleComponents.includes('*') ||
        visibleComponents.includes(component));
    
  }
  
  return false;
}
