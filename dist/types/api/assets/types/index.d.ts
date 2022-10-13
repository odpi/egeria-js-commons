/**
 * @param apiUrl is an optional parameter but it is used if API is deployed
 *               in a different location
 *
 * This function is used to fetch Asset Types.
 *
*/
declare const fetchTypes: (apiUrl?: string) => Promise<any>;
export { fetchTypes };
