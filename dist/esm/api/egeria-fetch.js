var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { handleResponse, authHeader } from '../auth';
import { API_URL, REQUEST_TIMEOUT } from '../commons/constants';
const egeriaFetch = (uri, method, headers, options) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);
    const requestOptions = Object.assign({ method: method, headers: headers, signal: controller.signal }, options);
    return fetch(`${API_URL}${uri}`, requestOptions).then((response) => {
        clearTimeout(timeoutId);
        return handleResponse(response);
    }).catch((error) => {
        console.error(`Err: ${error}`);
    });
};
/*
 * @param uri is the full URL
 * @param method usual fetch methods such as 'GET', 'POST', etc.
 * @param callback this is an optional callback function that can be used
 *                 in a different context to get the response and manage it
 *                 in a custom manner
 * @returns
 */
const fetchData = (uri, method, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield egeriaFetch(uri, method, Object.assign({}, authHeader()), {});
    const data = (yield res) ? res.json() : null;
    if (callback) {
        callback(data);
    }
    else {
        return data;
    }
});
export { egeriaFetch, fetchData };
