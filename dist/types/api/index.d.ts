import { glossaries } from './data/glossaries';
import { lineage } from './data/lineage';
import { types } from './data/types';
import { egeriaFetch } from './egeria-fetch';
declare const apiUrl: () => string;
declare function goHome(): void;
export { apiUrl, egeriaFetch, glossaries, goHome, lineage, types };
