import { glossaries } from './data/glossaries';
import { lineage } from './data/lineage';
import { types } from './data/types';
import { egeriaFetch, fetchData } from './egeria-fetch';
import {
  fetchRawData,
  fetchTypes
} from './assets';

import {
  API_ASSETS_SEARCH_PATH,
  API_ASSETS_TYPES_PATH
} from './routes';

const apiUrl = () => {
  return `${process.env.REACT_APP_API_URL}`;
}

const test = () => {
  return 'test';
};

function goHome() {
  console.log('WENT HOME');

  window.location.href='/';
};

export {
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
}
