import { PAGE_SIZE_INCREASE_VALUE } from './constants';
const getQueryParamsPath = (formData) => {
    const { q, exactMatch, caseSensitive, types, pageSize } = formData;
    let queryParams = [];
    if (q) {
        queryParams.push(`q=${q}`);
    }
    if (types && types.length > 0) {
        queryParams.push(`types=${types.join(',')}`);
    }
    queryParams.push(`exactMatch=${exactMatch}`);
    queryParams.push(`caseSensitive=${caseSensitive}`);
    queryParams.push(`pageSize=${pageSize}`);
    return queryParams;
};
const getQueryParams = (searchParams) => {
    var _a;
    return {
        q: searchParams.get('q') || '',
        types: ((_a = searchParams.get('types')) === null || _a === void 0 ? void 0 : _a.split(',')) || [],
        exactMatch: searchParams.get('exactMatch') === "true" ? true : false,
        caseSensitive: searchParams.get('caseSensitive') === "true" ? true : false,
        pageSize: searchParams.get('pageSize') ? parseInt(searchParams.get('pageSize')) : PAGE_SIZE_INCREASE_VALUE
    };
};
export { getQueryParams, getQueryParamsPath };