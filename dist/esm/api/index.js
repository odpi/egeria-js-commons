import { glossaries } from './data/glossaries';
import { lineage } from './data/lineage';
import { types } from './data/types';
import { egeriaFetch } from './egeria-fetch';
const apiUrl = () => {
    return `${process.env.REACT_APP_API_URL}`;
};
function goHome() {
    console.log('WENT HOME');
    window.location.href = '/';
}
;
export { apiUrl, egeriaFetch, glossaries, goHome, lineage, types };
