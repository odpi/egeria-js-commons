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
  fetchRawData,
  fetchTypes,
  glossaries,
  goHome,
  lineage,
  types,
} from './api';

import {
  egeriaFetch,
  fetchData
} from './http';

import {
  authHeader,
  authHeaderWithContentType,
  handleResponse
} from './http';

import {
  hasComponent
} from './permissions';

import {
  login,
  logout
} from './authentication';

import {
  hasTab
} from './has-tab';

import {
  token
} from './token';

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
import { JWTInterface } from './token';

import {
  formIsValid,
  getQueryParams,
  getQueryParamsPath,
  validateQueryAndTypes,

  isArrayEmpty,
  isStringLonger
} from './forms';

export type { formData };
export type { JWTInterface };

export {
  apiUrl,
  authHeader,
  authHeaderWithContentType,
  capitalize,
  egeriaFetch,
  fetchData,
  getComponent,
  getFormattedDate,
  getIconByGroup,
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
  token,
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
