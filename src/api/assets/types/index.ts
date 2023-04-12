import { API_ASSETS_TYPES_PATH } from '../../routes';
import { fetchData } from '../../../http';

/**
 * @param apiUrl is an optional parameter but it is used if API is deployed
 *               in a different location
 *
 * This function is used to fetch Asset Types.
 *
*/
const fetchTypes = async () => {
  let typesData = await fetchData(`${API_ASSETS_TYPES_PATH}`, 'GET')

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
