import { describe, expect, it} from '@jest/globals';
import { hasComponent } from './has-component';

const encodedToken = 'eyJraWQiOiI4Y2FkZTQwMC00ZTBkLTQ4ZjktOWU2Mi1kNGNmOGMxZGEyMmQiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJzYXJidWxsIiwic2NvcGUiOlsiUk9MRV9VU0VSIiwiUk9MRV9BRE1JTiJdLCJpc3MiOiJzZWxmIiwidmlzaWJsZUNvbXBvbmVudHMiOlsiKiIsImFzc2V0LWNhdGFsb2ciLCJ2ZXJ0aWNhbC1saW5lYWdlIiwiYXNzZXQtbGluZWFnZSIsImFib3V0IiwiZW5kLXRvLWVuZCIsInJlcG9zaXRvcnktZXhwbG9yZXIiLCJsaW5lYWdlLWltcG9ydCIsImFzc2V0LWxpbmVhZ2UtcHJpbnQiLCJnbG9zc2FyeSIsInVsdGltYXRlLWRlc3RpbmF0aW9uIiwiYXNzZXQtZGV0YWlscyIsInVsdGltYXRlLXNvdXJjZSIsInR5cGUtZXhwbG9yZXIiLCJhc3NldC1kZXRhaWxzLXByaW50Il0sImV4cCI6MTY4MTMwODIzMiwiaWF0IjoxNjgxMzA0NjMyfQ.Mluh_rebESwVDUFgHjBZLXpImIzmWpVvJGvX5ePCZrvyiABFkAwMKyrNUyagSKjuzKvmtU4ItXG-6FCXpCZ29grIUAoV-W_bLUij7YirBsJW8QtXEprBTqCHdnUQ7fNoOWTR0yvYgnTSzZ5OGtf-UWUokM4P5PUFz9doPNziup3d73Ti1T9EaGZcn1I_rC1oOPE8XKGkFujyUM8MtgUCGjs0awC59vB91Te6GplsYR1YWnrQuoBp1lpjXXUI6VIjw1NKsBfX0ETsAZZtn8SsM6TE_MsajeafJyvQ4F9quEzXEhNOL_tOtJIHnLUvSo6yn69mWdK7vbUFn5NVFX8WxA';

const oldToken = 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxMjM0Iiwic3ViIjoie1widXNlcm5hbWVcIjpcInVzZXIxXCIsXCJkaXNwbGF5TmFtZVwiOlwiRnVsbCBOYW1lXCIsXCJmaXJzdE5hbWVcIjpcIkZ1bGxcIixcImxhc3ROYW1lXCI6XCJOYW1lXCIsXCJlbWFpbFwiOlwiZW1haWxAZXhhbXBsZS5jb21cIixcImF2YXRhclVybFwiOm51bGwsXCJyb2xlc1wiOltcIlJPTEVfQVwiLFwiUk9MRV9CXCJdLFwidmlzaWJsZUNvbXBvbmVudHNcIjpbXCJhc3NldC1jYXRhbG9nXCIsXCJ2ZXJ0aWNhbC1saW5lYWdlXCIsXCJhc3NldC1saW5lYWdlXCIsXCJhYm91dFwiLFwiZW5kLXRvLWVuZFwiLFwiKlwiLFwidWx0aW1hdGUtZGVzdGluYXRpb25cIixcInVsdGltYXRlLXNvdXJjZVwiXX0ifQ.N_3QdR01jDFOBN3yb5Qc1IUFN2kv6JPtslzUXtEabilbnxO6VRpgLG3V28ZRvRv1p8ePKSKlV_MuQKcTcJ7_AA';

const localStorageMock = {
  getItem(key) {
    return encodedToken;
  }
} as Storage;

global.localStorage = localStorageMock;

describe('hasComponent', () => {
  it('should return true if component is in visible components', () => {
    expect(hasComponent('Component 1')).toBe(true);
  });

  it('should return true if super admin and visibleComponents has only \'*\'', () => {
    expect(hasComponent('asset-details')).toBe(true);
  });

  it('should return true if super admin and component not in visibleComponents', () => {
    expect(hasComponent('*')).toBe(true);
  });

  it('should return false with old token', () => {
    const localStorageMock = {
      getItem(key) {
        return oldToken;
      }
    } as Storage;

    global.localStorage = localStorageMock;

    expect(hasComponent('*')).toBe(false);
  });
});
