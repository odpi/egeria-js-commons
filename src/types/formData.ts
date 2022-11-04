
/**
 * Interface used for the Asset Catalog form.
 * It's describing the attributes types used.
 */
interface formData {
  caseSensitive: boolean,
  exactMatch: boolean,
  pageSize: number,
  q: {
      value: string,
      isValid: boolean,
      Pristine: boolean
  },
  types: {
      value: Array<string>,
      isValid: boolean,
      Pristine: boolean
  }
}

export type {
  formData
}