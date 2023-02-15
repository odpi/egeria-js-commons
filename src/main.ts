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
  getFormattedDate
} from './get-formatted-date';

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
  getSub,
  handleResponse,
  hasComponent,
  hasTab,
  login,
  logout,
  parseJwt,
  setToken
} from './auth';

import {
  ABOUT_PATH,
  ASSET_CATALOG_PATH,
  LINEAGE_TYPES,
  LOGIN_PATH,
  PAGE_SIZE_INCREASE_VALUE,
  QUERY_MIN_LENGTH,
  TYPES_MIN_SELECTED,
  VISIBLE_COMPONENTS,
  getAssetLineagePrintPath
} from './commons';

import { formData } from './types/formData';

import {
  formIsValid,
  getQueryParams,
  getQueryParamsPath,
  validateQueryAndTypes,

  isArrayEmpty,
  isStringLonger
} from './forms';

export type { formData };

export {
  apiUrl,
  authHeader,
  authHeaderWithContentType,
  capitalize,
  currentJwt,
  egeriaFetch,
  getComponent,
  getFormattedDate,
  getIconByGroup,
  getSub,
  glossaries,
  goHome,
  handleResponse,
  hasComponent,
  hasTab,
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

  ABOUT_PATH,
  API_ASSETS_SEARCH_PATH,
  API_ASSETS_TYPES_PATH,
  ASSET_CATALOG_PATH,
  LOGIN_PATH,
  LINEAGE_TYPES,
  VISIBLE_COMPONENTS,
  getAssetLineagePrintPath,

  PAGE_SIZE_INCREASE_VALUE,
  QUERY_MIN_LENGTH,
  TYPES_MIN_SELECTED,

  fetchTypes,
  fetchRawData,

  /* AssetCatalog */
  formIsValid,
  getQueryParams,
  getQueryParamsPath,
  validateQueryAndTypes,

  /* Validators */
  isArrayEmpty,
  isStringLonger
};
