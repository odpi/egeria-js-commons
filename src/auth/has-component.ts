import { getSub } from "./get-sub";

export const hasComponent = (component: string) => {
  const sub = getSub();

  if (sub !== null && JSON.parse(sub).visibleComponents.includes(component)) {
    return true;
  }

  return false;
}
