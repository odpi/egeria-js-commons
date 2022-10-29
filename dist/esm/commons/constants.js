/**
 * CONSTANTS used through the entire application.
 */
const QUERY_MIN_LENGTH = parseInt(process.env.EGERIA_UI_QUERY_MIN_LENGTH) || 3;
const TYPES_MIN_SELECTED = parseInt(process.env.EGERIA_UI_TYPES_MIN_SELECTED) || 1;
const PAGE_SIZE_INCREASE_VALUE = parseInt(process.env.EGERIA_UI_PAGE_SIZE_INCREASE_VALUE) || 25;
const REQUEST_TIMEOUT = parseInt(process.env.EGERIA_UI_REQUEST_TIMEOUT) || 30000;
const API_URL = process.env.EGERIA_UI_API_URL || '/';
export { API_URL, PAGE_SIZE_INCREASE_VALUE, QUERY_MIN_LENGTH, REQUEST_TIMEOUT, TYPES_MIN_SELECTED };
