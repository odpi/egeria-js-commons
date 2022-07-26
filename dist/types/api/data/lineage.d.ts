declare function getLineageTypes(): Promise<any>;
declare function getNameSuggestions(name: string, type: string): Promise<any>;
export declare const lineage: {
    getLineageTypes: typeof getLineageTypes;
    getNameSuggestions: typeof getNameSuggestions;
};
export {};
