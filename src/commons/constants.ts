/**
 * CONSTANTS used through the entire application.
 */
const API_URL = process.env.REACT_APP_API_URL || '';
const PAGE_SIZE_INCREASE_VALUE = parseInt(process.env.REACT_APP_PAGE_SIZE_INCREASE_VALUE) || 25;
const QUERY_MIN_LENGTH = parseInt(process.env.REACT_APP_QUERY_MIN_LENGTH) || 3;
const REQUEST_TIMEOUT = parseInt(process.env.REACT_APP_REQUEST_TIMEOUT) || 30000;
const TYPES_MIN_SELECTED = parseInt(process.env.REACT_APP_TYPES_MIN_SELECTED) || 1;

enum LINEAGE_TYPES {
  END_TO_END = 'end-to-end',
  VERTICAL_LINEAGE = 'vertical-lineage',
  ULTIMATE_SOURCE = 'ultimate-source',
  ULTIMATE_DESTINATION = 'ultimate-destination'
}

enum VISIBLE_COMPONENTS {
  ASSET_CATALOG = 'asset-catalog',
  GLOSSARY = 'glossary',
  REPOSITORY_EXPLORER = 'repository-explorer',
  TYPE_EXPLORER = 'type-explorer',
  ASSET_LINEAGE = 'asset-lineage',
  END_TO_END = 'end-to-end',
  ULTIMATE_SOURCE = 'ultimate-source',
  ULTIMATE_DESTINATION = 'ultimate-destination',
  VERTICAL_LINEAGE = 'vertical-lineage'
}


export {
  API_URL,
  LINEAGE_TYPES,
  PAGE_SIZE_INCREASE_VALUE,
  QUERY_MIN_LENGTH,
  REQUEST_TIMEOUT,
  TYPES_MIN_SELECTED,
  VISIBLE_COMPONENTS
}