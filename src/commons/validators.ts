export {isStringLonger, isArrayEmpty};

/**
 * @param query the string to check length
 * @param minLength the length to check
 * return whether the string is longer than minLength
 *
 */
const isStringLonger = (query: string, minLength: number) => {
    if (query.length < minLength) {
        return false;
    }
    return true;
}
/**
 * @param array the array to check
 * return whether the array is empty or null
 *
 */
const isArrayEmpty = (array: Array<string>) => {
    if (!array || array.length === 0) {
        return true;
    }
    return false;
};
