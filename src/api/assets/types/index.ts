import { API_ASSETS_TYPES_PATH } from '../../routes';

import { fetchData } from '../../egeria-fetch';

const fetchTypes = async (apiUrl?: string) => {
  let typesData = await fetchData(`${apiUrl || ''}${API_ASSETS_TYPES_PATH}`, 'GET');

  typesData = [
    ...typesData.map((d: any) => {
      return {
        value: d.name,
        label: d.name
      };
    })
  ];

  return typesData;
};

export {
  fetchTypes
}
