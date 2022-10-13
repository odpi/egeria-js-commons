import { formData } from '../types/formData';
/**
 *
 * @param formData should contain all the query params from the URL
 * @returns an array of query params prepared to be concatenated in order to
 *          form a valid URL path
 */
declare const getQueryParamsPath: (formData: formData) => any;
/**
 *
 * @param searchParams react-router-dom object that contains and object with all
 *                     query params
 * @returns a new object with validated query params input for Asset Catalog
 */
declare const getQueryParams: (searchParams: any) => {
    q: any;
    types: any;
    exactMatch: boolean;
    caseSensitive: boolean;
    pageSize: number;
};
export { getQueryParams, getQueryParamsPath };
