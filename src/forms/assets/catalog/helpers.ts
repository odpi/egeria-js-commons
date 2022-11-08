import { formData } from '../../../types/formData';
import {
  PAGE_SIZE_INCREASE_VALUE,
  QUERY_MIN_LENGTH
} from '../../../commons/constants';

import {
  isStringLonger,
  isArrayEmpty
} from '../../validators';

const formIsValid = (form: formData) => {
  return form.q?.isValid && form.types?.isValid;
};

const getQueryParamsPath = (form: formData) => {
  return Object.keys(form).map((key: any, index: number) => {
    switch(key) {
      case 'q':
        return `${key}=${form.q?.value}`;
      case 'types':
        return `${key}=${form.types?.value.join(',')}`;
      default:
        return `${key}=${form[key as keyof formData]}`;
    }
  }).join('&');
};

/**
 *
 * @param searchParams react-router-dom object that contains and object with all
 *                     query params
 * @returns a new object with validated query params input for Asset Catalog
 */
const getQueryParams = (searchParams: any) => {
  let data: any = {};

  const params: any = [];

  searchParams.forEach((value: any, key: string) => {
    params.push({key: key, value: value});
  });

  params.forEach((param: any) => {
    switch(param.key) {
      case 'q':
        data = {
          ...data,
          q: param.value
        };
        break;
      case 'types':
        data = {
          ...data,
          types: param.value ? param.value.split(',') : []
        };
        break;
      case 'exactMatch':
        data = {
          ...data,
          exactMatch: param.value === 'true'
        };
        break;
      case 'caseSensitive':
        data = {
          ...data,
          caseSensitive: param.value === 'true'
        };
        break;
      case 'pageSize':
        data = {
          ...data,
          pageSize: param.value ? parseInt(param.value) : PAGE_SIZE_INCREASE_VALUE
        };
        break;
      default:
        console.log('UNKOWN_QUERY_PARAM');
        break;
    }
  });

  return {
    ...data
  };
};

const validateQueryAndTypes = (_queryParams: any, typesData: any) => {
  const typesIntersection = _queryParams.types ?
                              typesData.map((t: any) => t.value).filter((value: any) => _queryParams.types.includes(value)) :
                              [];

  return {
    ..._queryParams,
    q: {
      value: _queryParams.q || '',
      isPristine : _queryParams.q === undefined ? true : false,
      isValid: _queryParams.q ? isStringLonger(_queryParams.q, QUERY_MIN_LENGTH) : false
    },
    types: {
      value: typesIntersection,
      isPristine : _queryParams.types === undefined ? true : false,
      isValid: !isArrayEmpty(typesIntersection)
    }
  };
};

export {
  formIsValid,
  getQueryParamsPath,
  getQueryParams,
  validateQueryAndTypes
}
