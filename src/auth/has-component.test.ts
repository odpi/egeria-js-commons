import { describe, expect, jest, test, it} from '@jest/globals';
import { getSub } from './get-sub';
import { hasComponent } from './has-component';

jest.mock('./get-sub', () => ({
  getSub: jest.fn()
}));

describe('hasComponent', () => {
  it('should return true if component is in visible components', () => {
    const visibleComponents = ['Component1', 'Component2'];
    const sub = { visibleComponents };

    (getSub as jest.Mock).mockReturnValue(JSON.stringify(sub));

    expect(hasComponent('Component1')).toBe(true);
  });

  it('should return true if super admin and visibleComponents has only \'*\'', () => {
    const visibleComponents = ['*'];
    const sub = { visibleComponents };

    (getSub as jest.Mock).mockReturnValue(JSON.stringify(sub));

    expect(hasComponent('Component1')).toBe(true);
  });

  it('should return true if super admin and component not in visibleComponents', () => {
    const visibleComponents = ['Component1', '*'];
    const sub = { visibleComponents };

    (getSub as jest.Mock).mockReturnValue(JSON.stringify(sub));

    expect(hasComponent('Component3')).toBe(true);
  });

  it('should return false if component is not in visible components', () => {
    const visibleComponents = ['Component1', 'Component2'];
    const sub = { visibleComponents };

    (getSub as jest.Mock).mockReturnValue(JSON.stringify(sub));

    expect(hasComponent('Component3')).toBe(false);
  });

  it('should return false if sub is null', () => {
    const visibleComponents = [];
    const sub = { visibleComponents };

    (getSub as jest.Mock).mockReturnValue(JSON.stringify(sub));

    expect(hasComponent('Component3')).toBe(false);
  });
});
