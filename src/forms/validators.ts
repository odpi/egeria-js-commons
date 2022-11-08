/**
 * @param query the string to check length
 * @param minLength the length to check
 * return whether the string is longer than minLength
 *
 */
const isStringLonger = (query: string, minLength: number) => {
    return query.length >= minLength;

}
/**
 * @param array the array to check
 * return whether the array is empty or null
 *
 */
const isArrayEmpty = (array: Array<string>) => {
    return !array || array.length === 0;
};

export {
  isArrayEmpty,
  isStringLonger
};
