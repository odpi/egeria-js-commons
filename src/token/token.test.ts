import { describe, expect, it } from '@jest/globals';
import { parseJwt, token } from './';

const encodedToken = 'eyJraWQiOiI4Y2FkZTQwMC00ZTBkLTQ4ZjktOWU2Mi1kNGNmOGMxZGEyMmQiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJzYXJidWxsIiwic2NvcGUiOlsiUk9MRV9VU0VSIiwiUk9MRV9BRE1JTiJdLCJpc3MiOiJzZWxmIiwidmlzaWJsZUNvbXBvbmVudHMiOlsiKiIsImFzc2V0LWNhdGFsb2ciLCJ2ZXJ0aWNhbC1saW5lYWdlIiwiYXNzZXQtbGluZWFnZSIsImFib3V0IiwiZW5kLXRvLWVuZCIsInJlcG9zaXRvcnktZXhwbG9yZXIiLCJsaW5lYWdlLWltcG9ydCIsImFzc2V0LWxpbmVhZ2UtcHJpbnQiLCJnbG9zc2FyeSIsInVsdGltYXRlLWRlc3RpbmF0aW9uIiwiYXNzZXQtZGV0YWlscyIsInVsdGltYXRlLXNvdXJjZSIsInR5cGUtZXhwbG9yZXIiLCJhc3NldC1kZXRhaWxzLXByaW50Il0sImV4cCI6MTY4MTMwODIzMiwiaWF0IjoxNjgxMzA0NjMyfQ.Mluh_rebESwVDUFgHjBZLXpImIzmWpVvJGvX5ePCZrvyiABFkAwMKyrNUyagSKjuzKvmtU4ItXG-6FCXpCZ29grIUAoV-W_bLUij7YirBsJW8QtXEprBTqCHdnUQ7fNoOWTR0yvYgnTSzZ5OGtf-UWUokM4P5PUFz9doPNziup3d73Ti1T9EaGZcn1I_rC1oOPE8XKGkFujyUM8MtgUCGjs0awC59vB91Te6GplsYR1YWnrQuoBp1lpjXXUI6VIjw1NKsBfX0ETsAZZtn8SsM6TE_MsajeafJyvQ4F9quEzXEhNOL_tOtJIHnLUvSo6yn69mWdK7vbUFn5NVFX8WxA';
const decodedToken = {
  "sub": "sarbull",
  "scope": [
    "ROLE_USER",
    "ROLE_ADMIN"
  ],
  "iss": "self",
  "visibleComponents": [
    "*",
    "asset-catalog",
    "vertical-lineage",
    "asset-lineage",
    "about",
    "end-to-end",
    "repository-explorer",
    "lineage-import",
    "asset-lineage-print",
    "glossary",
    "ultimate-destination",
    "asset-details",
    "ultimate-source",
    "type-explorer",
    "asset-details-print"
  ],
  "exp": 1681308232,
  "iat": 1681304632
};

const localStorageMock = {
  getItem(key) {
    return encodedToken;
  }
} as Storage;

global.localStorage = localStorageMock;

describe('token based tests', () => {
  it('parseJwt current token', () => {
    expect(parseJwt(token.getValue())).toEqual(decodedToken);
  });

  it('current token', () => {
    expect(token.getValue()).toEqual(encodedToken);
  });

  it('parse token', () => {
    expect(token.decodedObject()).toEqual(decodedToken);
  });

  it('parseJwt bad token', () => {
    const localStorageMock = {
      getItem(key) {
        return 'bad token be used here';
      }
    } as Storage;

    global.localStorage = localStorageMock;

    expect(parseJwt(token.getValue())).toEqual(null);
  });
});