import {
  iconsMap,
  itemGroupIconMap,
  getIconByGroup,
  linksTypeIconMap,
  menuIcons
} from './icons-and-data-mappings';

import {
  lineageViewsTypesMapping
} from './navigation-types-mappings'

import {
  capitalize
} from './capitalize';

import {
  getComponent
} from './get-component';

import {
  API_ASSETS_SEARCH_PATH,
  API_ASSETS_TYPES_PATH,
  apiUrl,
  egeriaFetch,
  fetchData,
  fetchRawData,
  fetchTypes,
  glossaries,
  goHome,
  lineage,
  types,
} from './api';

import {
  authHeader,
  authHeaderWithContentType,
  currentJwt,
  handleResponse,
  login,
  logout,
  parseJwt,
  setToken
} from './auth';

import {
  QUERY_MIN_LENGTH,
  TYPES_MIN_SELECTED,
  PAGE_SIZE_INCREASE_VALUE,
  getQueryParams,
  getQueryParamsPath,
  ASSET_CATALOG_PATH
} from './commons';

import { formData } from './types/formData';

export type { formData };

export {
  apiUrl,
  authHeader,
  authHeaderWithContentType,
  capitalize,
  currentJwt,
  egeriaFetch,
  getComponent,
  getIconByGroup,
  glossaries,
  goHome,
  handleResponse,
  iconsMap,
  itemGroupIconMap,
  lineage,
  lineageViewsTypesMapping,
  linksTypeIconMap,
  login,
  logout,
  menuIcons,
  parseJwt,
  setToken,
  types,

  ASSET_CATALOG_PATH,
  PAGE_SIZE_INCREASE_VALUE,
  getQueryParams,
  getQueryParamsPath,
  fetchTypes,
  fetchRawData
};
