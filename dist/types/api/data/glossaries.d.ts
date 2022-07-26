export declare const glossaries: {
    getAll: typeof getAll;
    getGlossaryCategories: typeof getGlossaryCategories;
    getGlossaryTerms: typeof getGlossaryTerms;
};
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
declare function getAll(): Promise<any>;
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
declare function getGlossaryCategories(): Promise<any>;
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
declare function getGlossaryTerms(): Promise<any>;
export {};
