/**
 * CONSTANTS used for main application paths (deep linking).
 */
const ASSET_CATALOG_PATH = '/assets/catalog';
const LOGIN_PATH = '/login';
const ABOUT_PATH = '/about';

export {
  ABOUT_PATH,
  ASSET_CATALOG_PATH,
  LOGIN_PATH
}

export function getAssetLineagePrintUri(guid: any, lineageType: any) {
  const printUri = `/asset-lineage/${ guid }/${ lineageType }/print`;

  return printUri;
}
