import { formData } from '../../../types/formData';
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
declare const fetchRawData: (formData: formData, apiUrl?: string) => Promise<any>;
export { fetchRawData };
