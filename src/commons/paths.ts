/**
 * CONSTANTS used for main application paths (deep linking).
 */
const ASSET_CATALOG_PATH = '/assets/catalog';
const LOGIN_PATH = '/login';
const ABOUT_PATH = '/about';

const getAssetLineagePrintUri = (guid: any, lineageType: any) => {
  return `/asset-lineage/${ guid }/${ lineageType }/print`;
};

export {
  ABOUT_PATH,
  ASSET_CATALOG_PATH,
  LOGIN_PATH,
  getAssetLineagePrintUri
}
