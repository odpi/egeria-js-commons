var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { API_ASSETS_SEARCH_PATH } from '../../routes';
import { QUERY_MIN_LENGTH, TYPES_MIN_SELECTED } from '../../../commons/constants';
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
const fetchRawData = (formData, apiUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const { q, types } = formData;
    if (q.length >= QUERY_MIN_LENGTH && types.length >= TYPES_MIN_SELECTED) {
        const _queryParams = getQueryParamsPath(formData);
        const path = `${API_ASSETS_SEARCH_PATH}${_queryParams.length ? `?${_queryParams.join('&')}` : ``}`;
        const rawData = yield fetchData(path, 'GET');
        return rawData;
    }
    else {
        console.error('Err: API conditions were not met.');
        return [];
    }
});
export { fetchRawData };
