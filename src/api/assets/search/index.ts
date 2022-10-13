import { API_ASSETS_SEARCH_PATH } from '../../routes';
import { QUERY_MIN_LENGTH, TYPES_MIN_SELECTED } from '../../../commons/constants';
import { formData } from '../../../types/formData';
import { fetchData } from '../../egeria-fetch';
import { getQueryParamsPath } from '../../../commons/helpers';

/**
 *
 * @param formData should contain all the query params from the URL
 * @param apiUrl is an optional parameter but it is used if API is deployed
 *        in a different location
 * @returns empty array if conditions aren't met otherwise it will fetch data
 *          from the API
 *
 * This function is used to fetch data for Asset Catalog.
 *
 */
const fetchRawData = async (formData: formData, apiUrl?: string) => {
  const {q, types} = formData;

  if(q.length >= QUERY_MIN_LENGTH && types.length >= TYPES_MIN_SELECTED) {
    const _queryParams = getQueryParamsPath(formData);

    const path = `${apiUrl || ''}${API_ASSETS_SEARCH_PATH}${_queryParams.length ? `?${_queryParams.join('&')}` : ``}`;

    const rawData = await fetchData(path, 'GET');

    return rawData;
  } else {
    return [];
  }
};

export {
  fetchRawData
}
