declare const egeriaFetch: (endpoint: string, method: string, headers: any, options: any) => Promise<any>;
declare const fetchData: (uri: string, method: string, callback?: Function) => Promise<any>;
export { egeriaFetch, fetchData };
