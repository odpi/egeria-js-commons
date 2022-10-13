import { formData } from '../types/formData';
declare const getQueryParamsPath: (formData: formData) => any;
declare const getQueryParams: (searchParams: any) => {
    q: any;
    types: any;
    exactMatch: boolean;
    caseSensitive: boolean;
    pageSize: number;
};
export { getQueryParams, getQueryParamsPath };
