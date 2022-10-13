/**
 * Interface used for the Asset Catalog form.
 * It's describing the attributes types used.
 */
interface formData {
    caseSensitive: boolean;
    exactMatch: boolean;
    pageSize: number;
    q: string;
    types: Array<string>;
}
export type { formData };
