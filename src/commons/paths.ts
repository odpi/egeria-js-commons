/**
 * CONSTANTS used for main application paths (deep linking).
 */
const ASSET_CATALOG_PATH = '/assets/catalog';
const LOGIN_PATH = '/login';
const ABOUT_PATH = '/about';

const getAssetLineagePrintPath = (guid: any, lineageType: any, includeProcess: any) => {
  return `/asset-lineage/${ guid }/${ lineageType }/print?includeProcesses=${ includeProcess }`;
};

export {
  ABOUT_PATH,
  ASSET_CATALOG_PATH,
  LOGIN_PATH,
  getAssetLineagePrintPath
}
