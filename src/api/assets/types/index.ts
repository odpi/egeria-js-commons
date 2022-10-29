import { API_ASSETS_TYPES_PATH } from '../../routes';

import { fetchData } from '../../egeria-fetch';

import { API_URL } from '../../../commons/constants';

/**
 * @param apiUrl is an optional parameter but it is used if API is deployed
 *               in a different location
 *
 * This function is used to fetch Asset Types.
 *
*/
const fetchTypes = async (apiUrl?: string) => {
  let typesData = await fetchData(`${apiUrl ? apiUrl : API_URL}${API_ASSETS_TYPES_PATH}`, 'GET')

  typesData = typesData ? [
    ...typesData.map((d: any) => {
      return {
        value: d.name,
        label: d.name
      };
    })
  ] : [];

  return typesData;
};

export {
  fetchTypes
}
