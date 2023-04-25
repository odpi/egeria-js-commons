export interface JWTInterface {
  sub: string;
  scope: string[];
  iss: string;
  visibleComponents: string[];
  exp: number;
  iat: number;
}

export const parseJwt = (token: string | null): JWTInterface | null => {
  if(token !== null && token !== "") {
    try {
      const base64Url = token.split('.')[1];

      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    } catch(e) {
      return null;
    }
  }

  return null;
};

export const token = {
  setValue: (value: string): void => {
    localStorage.setItem('token', value);
  },
  getValue: (): string | null => {
    return localStorage.getItem('token') || null;
  },
  delete: (): void => {
    localStorage.removeItem('token');
  },
  decodedObject: function(): JWTInterface | null {
    const decodedObject: JWTInterface | null = parseJwt(this.getValue());

    if(decodedObject) {
      return decodedObject;
    }

    return null;
  }
};