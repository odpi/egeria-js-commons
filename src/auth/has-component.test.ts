import { describe, expect, jest, it} from '@jest/globals';
import { currentJwt } from './current-jwt';
import { getSub } from './get-sub';
import { hasComponent } from './has-component';
import { parseJwt } from './parse-jwt';

jest.mock('./get-sub', () => ({
  getSub: jest.fn()
}));

jest.mock('./current-jwt', () => ({
  currentJwt: jest.fn()
}));

jest.mock('./parse-jwt', () => ({
  parseJwt: jest.fn()
}));

describe('hasComponent', () => {
  it('should return true if component is in visible components', () => {
    const visibleComponents = ['Component1', 'Component2'];
    const sub = { visibleComponents };

    (currentJwt as jest.Mock).mockReturnValue(sub);
    (parseJwt as jest.Mock).mockReturnValue(sub);


    expect(hasComponent('Component1')).toBe(true);
  });

  it('should return true if super admin and visibleComponents has only \'*\'', () => {
    const visibleComponents = ['*'];
    const sub = { visibleComponents };

    (currentJwt as jest.Mock).mockReturnValue(sub);
    (parseJwt as jest.Mock).mockReturnValue(sub);

    expect(hasComponent('Component1')).toBe(true);
  });

  it('should return true if super admin and component not in visibleComponents', () => {
    const visibleComponents = ['Component1', '*'];
    const sub = { visibleComponents };

    (currentJwt as jest.Mock).mockReturnValue(sub);
    (parseJwt as jest.Mock).mockReturnValue(sub);

    expect(hasComponent('Component3')).toBe(true);
  });

  it('should return false if component is not in visible components', () => {
    const visibleComponents = ['Component1', 'Component2'];
    const sub = { visibleComponents };

    (currentJwt as jest.Mock).mockReturnValue(sub);
    (parseJwt as jest.Mock).mockReturnValue(sub);

    expect(hasComponent('Component3')).toBe(false);
  });

  it('should return false if sub is null', () => {
    const visibleComponents = [];
    const sub = { visibleComponents };

    (currentJwt as jest.Mock).mockReturnValue(sub);
    (parseJwt as jest.Mock).mockReturnValue(sub);

    expect(hasComponent('Component3')).toBe(false);
  });
});
