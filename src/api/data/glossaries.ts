import { API_URL } from '../../commons/constants';

import {
  authHeader,
  handleResponse
} from '../../auth';

import { egeriaFetch } from '../egeria-fetch';

/**
 *
 * HTTP API request for retrieving all the asset types.
 *
 * @since      0.1.0
 * @access     public
 *
 *
 * @return {Promise} Returns a promise with the request.
 *
 */
function getAll() {
  return egeriaFetch(`/api/glossaries`, 'GET', authHeader(), {});
}

/**
 *
 * HTTP API request for retrieving all the glossary categories.
 *
 * @since      0.1.0
 * @access     public
 *
 *
 * @return {Promise} Returns a promise with the request.
 *
 */
function getGlossaryCategories(glossaryGUID) {
  return egeriaFetch(`/api/glossaries/${glossaryGUID}/categories`, 'GET', authHeader(), {});
}

/**
 *
 * HTTP API request for retrieving all the glossary terms.
 *
 * @since      0.1.0
 * @access     public
 *
 *
 * @return {Promise} Returns a promise with the request.
 *
 */
 function getGlossaryTerms(categoryGUID) {
  return egeriaFetch(`/api/glossaries/categories/${categoryGUID}/terms`, 'GET', authHeader(), {});
}

export const glossaries = {
  getAll,
  getGlossaryCategories,
  getGlossaryTerms
};