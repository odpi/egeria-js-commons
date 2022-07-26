/*
* The navigation tables are displayed based on the map defined below.
* If a type is missing from the map, it will have all the tabs displayed.
* ultimate-destination, ultimate-source, end-to-end,vertical-lineage
* */
export const lineageViewsTypesMapping = {
    "GlossaryTerm": ['vertical-lineage'],
    "Glossary": ['vertical-lineage'],
    'GlossaryCategory': ['vertical-lineage'],
    'PrimaryCategory': ['vertical-lineage'],
    'Process': ['ultimate-source', 'ultimate-destination', 'end-to-end'],
    'RelationalTable': ['ultimate-source', 'ultimate-destination', 'end-to-end'],
    'DataFile': ['ultimate-source', 'ultimate-destination', 'end-to-end'],
    'CSVFile': ['ultimate-source', 'ultimate-destination', 'end-to-end'],
};
