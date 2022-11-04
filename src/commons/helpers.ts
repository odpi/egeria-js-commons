import { formData } from '../types/formData';
import { PAGE_SIZE_INCREASE_VALUE } from './constants';

/**
 *
 * @param formData should contain all the query params from the URL
 * @returns an array of query params prepared to be concatenated in order to
 *          form a valid URL path
 */
const getQueryParamsPath = (formData: formData) => {
  const {q, exactMatch, caseSensitive, types, pageSize } = formData;

  let queryParams = [] as any;

  if(q.value) {
    queryParams.push(`q=${q.value}`);
  }

  if(types && types.value.length > 0) {
    queryParams.push(`types=${types.value.join(',')}`);
  }

  queryParams.push(`exactMatch=${exactMatch}`);
  queryParams.push(`caseSensitive=${caseSensitive}`);
  queryParams.push(`pageSize=${pageSize}`);

  return queryParams;
};

/**
 *
 * @param searchParams react-router-dom object that contains and object with all
 *                     query params
 * @returns a new object with validated query params input for Asset Catalog
 */
const getQueryParams = (searchParams: any) => {
  return {
    q: searchParams.get('q') || '',
    types: searchParams.get('types')?.split(',') || [],
    exactMatch: searchParams.get('exactMatch') === "true" ? true : false,
    caseSensitive: searchParams.get('caseSensitive') === "true" ? true : false,
    pageSize: searchParams.get('pageSize') ? parseInt(searchParams.get('pageSize')) : PAGE_SIZE_INCREASE_VALUE
  };
};

export {
  getQueryParams,
  getQueryParamsPath
}