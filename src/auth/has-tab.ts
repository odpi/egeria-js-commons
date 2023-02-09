import { lineageViewsTypesMapping } from '../navigation-types-mappings';

export const hasTab = (type: string, tabName: string) => {
  if (Object.keys(lineageViewsTypesMapping).includes(type)) {
    return lineageViewsTypesMapping[type].includes(tabName);
  } else {
    return false;
  }
};