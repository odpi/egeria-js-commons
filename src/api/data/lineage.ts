import { authHeader, handleResponse } from '../../http';
import { API_URL } from '../../commons/constants';

function getLineageTypes() {
  const requestOptions: any = {method: 'GET', headers: authHeader()};

  return fetch(`${API_URL}/api/lineage/types`, requestOptions).then(handleResponse);
}

function getNameSuggestions(name: string, type: string) {
  const requestOptions: any = {method: 'GET', headers: authHeader()};

  let url = `${API_URL}/api/lineage/nodes`;

  if (type) {
    url = `${url}?type=${type.trim()}`;
    if (name) {
      url = `${url}&name=${name.trim()}`;
    }
    url = `${url}&limit=10`;
  }

  return fetch(url, requestOptions).then(handleResponse);
}

export const lineage = {
  getLineageTypes,
  getNameSuggestions
};