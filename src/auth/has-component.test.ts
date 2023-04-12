import { describe, expect, jest, it} from '@jest/globals';
import { currentJwt } from './current-jwt';
import { hasComponent } from './has-component';
import { parseJwt } from './parse-jwt';

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

    jest.mock('./get-sub', () => ({
      getSub: () => sub
    }));

    (currentJwt as jest.Mock).mockReturnValue('eyJqdGkiOiI1OWUzY2EwMy1hYzFmLTRiODQtOGMxYi1kMWNkODQ2MWI1NDAiLCJzdWIiOiJ7XCJ1c2VybmFtZVwiOlwic2FyYnVsbFwiLFwiZGlzcGxheU5hbWVcIjpcIlNpcmJ1IE5pY29sYWUtQ2V6YXJcIixcImZpcnN0TmFtZVwiOlwiTmljb2xhZSAtIENlemFyXCIsXCJsYXN0TmFtZVwiOlwiU2lyYnVcIixcImVtYWlsXCI6XCJzaXJidW5pY29sYWVjZXphckBnbWFpbC5jb21cIixcImF2YXRhclVybFwiOm51bGwsXCJyb2xlc1wiOltcIlJPTEVfQURNSU5cIixcIlJPTEVfVVNFUlwiXSxcInZpc2libGVDb21wb25lbnRzXCI6W1wiYXNzZXQtY2F0YWxvZ1wiLFwidmVydGljYWwtbGluZWFnZVwiLFwiYXNzZXQtbGluZWFnZVwiLFwiYWJvdXRcIixcImVuZC10by1lbmRcIixcIipcIixcInJlcG9zaXRvcnktZXhwbG9yZXJcIixcImFzc2V0LWxpbmVhZ2UtcHJpbnRcIixcImdsb3NzYXJ5XCIsXCJ1bHRpbWF0ZS1kZXN0aW5hdGlvblwiLFwiYXNzZXQtZGV0YWlsc1wiLFwidWx0aW1hdGUtc291cmNlXCIsXCJ0eXBlLWV4cGxvcmVyXCIsXCJhc3NldC1kZXRhaWxzLXByaW50XCIsXCJsaW5lYWdlLWltcG9ydFwiXX0ifQ');
    (parseJwt as jest.Mock).mockReturnValue(sub);


    expect(hasComponent('Component1')).toBe(false);
  });

  it('should return true if super admin and visibleComponents has only \'*\'', () => {
    const visibleComponents = ['*'];
    const sub = { visibleComponents };

    jest.mock('./get-sub', () => ({
      getSub: () => sub
    }));

    (currentJwt as jest.Mock).mockReturnValue('eyJqdGkiOiI1OWUzY2EwMy1hYzFmLTRiODQtOGMxYi1kMWNkODQ2MWI1NDAiLCJzdWIiOiJ7XCJ1c2VybmFtZVwiOlwic2FyYnVsbFwiLFwiZGlzcGxheU5hbWVcIjpcIlNpcmJ1IE5pY29sYWUtQ2V6YXJcIixcImZpcnN0TmFtZVwiOlwiTmljb2xhZSAtIENlemFyXCIsXCJsYXN0TmFtZVwiOlwiU2lyYnVcIixcImVtYWlsXCI6XCJzaXJidW5pY29sYWVjZXphckBnbWFpbC5jb21cIixcImF2YXRhclVybFwiOm51bGwsXCJyb2xlc1wiOltcIlJPTEVfQURNSU5cIixcIlJPTEVfVVNFUlwiXSxcInZpc2libGVDb21wb25lbnRzXCI6W1wiYXNzZXQtY2F0YWxvZ1wiLFwidmVydGljYWwtbGluZWFnZVwiLFwiYXNzZXQtbGluZWFnZVwiLFwiYWJvdXRcIixcImVuZC10by1lbmRcIixcIipcIixcInJlcG9zaXRvcnktZXhwbG9yZXJcIixcImFzc2V0LWxpbmVhZ2UtcHJpbnRcIixcImdsb3NzYXJ5XCIsXCJ1bHRpbWF0ZS1kZXN0aW5hdGlvblwiLFwiYXNzZXQtZGV0YWlsc1wiLFwidWx0aW1hdGUtc291cmNlXCIsXCJ0eXBlLWV4cGxvcmVyXCIsXCJhc3NldC1kZXRhaWxzLXByaW50XCIsXCJsaW5lYWdlLWltcG9ydFwiXX0ifQ');
    (parseJwt as jest.Mock).mockReturnValue(sub);

    expect(hasComponent('Component1')).toBe(false);
  });

  it('should return true if super admin and component not in visibleComponents', () => {
    const visibleComponents = ['Component1', '*'];
    const sub = { visibleComponents };

    jest.mock('./get-sub', () => ({
      getSub: () => sub
    }));

    (currentJwt as jest.Mock).mockReturnValue('eyJqdGkiOiI1OWUzY2EwMy1hYzFmLTRiODQtOGMxYi1kMWNkODQ2MWI1NDAiLCJzdWIiOiJ7XCJ1c2VybmFtZVwiOlwic2FyYnVsbFwiLFwiZGlzcGxheU5hbWVcIjpcIlNpcmJ1IE5pY29sYWUtQ2V6YXJcIixcImZpcnN0TmFtZVwiOlwiTmljb2xhZSAtIENlemFyXCIsXCJsYXN0TmFtZVwiOlwiU2lyYnVcIixcImVtYWlsXCI6XCJzaXJidW5pY29sYWVjZXphckBnbWFpbC5jb21cIixcImF2YXRhclVybFwiOm51bGwsXCJyb2xlc1wiOltcIlJPTEVfQURNSU5cIixcIlJPTEVfVVNFUlwiXSxcInZpc2libGVDb21wb25lbnRzXCI6W1wiYXNzZXQtY2F0YWxvZ1wiLFwidmVydGljYWwtbGluZWFnZVwiLFwiYXNzZXQtbGluZWFnZVwiLFwiYWJvdXRcIixcImVuZC10by1lbmRcIixcIipcIixcInJlcG9zaXRvcnktZXhwbG9yZXJcIixcImFzc2V0LWxpbmVhZ2UtcHJpbnRcIixcImdsb3NzYXJ5XCIsXCJ1bHRpbWF0ZS1kZXN0aW5hdGlvblwiLFwiYXNzZXQtZGV0YWlsc1wiLFwidWx0aW1hdGUtc291cmNlXCIsXCJ0eXBlLWV4cGxvcmVyXCIsXCJhc3NldC1kZXRhaWxzLXByaW50XCIsXCJsaW5lYWdlLWltcG9ydFwiXX0ifQ');
    (parseJwt as jest.Mock).mockReturnValue(sub);

    expect(hasComponent('Component3')).toBe(false);
  });

  it('should return false if component is not in visible components', () => {
    const visibleComponents = ['Component1', 'Component2'];
    const sub = { visibleComponents };

    jest.mock('./get-sub', () => ({
      getSub: () => sub
    }));

    (currentJwt as jest.Mock).mockReturnValue('eyJqdGkiOiI1OWUzY2EwMy1hYzFmLTRiODQtOGMxYi1kMWNkODQ2MWI1NDAiLCJzdWIiOiJ7XCJ1c2VybmFtZVwiOlwic2FyYnVsbFwiLFwiZGlzcGxheU5hbWVcIjpcIlNpcmJ1IE5pY29sYWUtQ2V6YXJcIixcImZpcnN0TmFtZVwiOlwiTmljb2xhZSAtIENlemFyXCIsXCJsYXN0TmFtZVwiOlwiU2lyYnVcIixcImVtYWlsXCI6XCJzaXJidW5pY29sYWVjZXphckBnbWFpbC5jb21cIixcImF2YXRhclVybFwiOm51bGwsXCJyb2xlc1wiOltcIlJPTEVfQURNSU5cIixcIlJPTEVfVVNFUlwiXSxcInZpc2libGVDb21wb25lbnRzXCI6W1wiYXNzZXQtY2F0YWxvZ1wiLFwidmVydGljYWwtbGluZWFnZVwiLFwiYXNzZXQtbGluZWFnZVwiLFwiYWJvdXRcIixcImVuZC10by1lbmRcIixcIipcIixcInJlcG9zaXRvcnktZXhwbG9yZXJcIixcImFzc2V0LWxpbmVhZ2UtcHJpbnRcIixcImdsb3NzYXJ5XCIsXCJ1bHRpbWF0ZS1kZXN0aW5hdGlvblwiLFwiYXNzZXQtZGV0YWlsc1wiLFwidWx0aW1hdGUtc291cmNlXCIsXCJ0eXBlLWV4cGxvcmVyXCIsXCJhc3NldC1kZXRhaWxzLXByaW50XCIsXCJsaW5lYWdlLWltcG9ydFwiXX0ifQ');
    (parseJwt as jest.Mock).mockReturnValue(sub);

    expect(hasComponent('Component3')).toBe(false);
  });

  it('should return false if sub is null', () => {
    const visibleComponents = [];
    const sub = { visibleComponents };

    jest.mock('./get-sub', () => ({
      getSub: () => sub
    }));

    (currentJwt as jest.Mock).mockReturnValue('eyJqdGkiOiI1OWUzY2EwMy1hYzFmLTRiODQtOGMxYi1kMWNkODQ2MWI1NDAiLCJzdWIiOiJ7XCJ1c2VybmFtZVwiOlwic2FyYnVsbFwiLFwiZGlzcGxheU5hbWVcIjpcIlNpcmJ1IE5pY29sYWUtQ2V6YXJcIixcImZpcnN0TmFtZVwiOlwiTmljb2xhZSAtIENlemFyXCIsXCJsYXN0TmFtZVwiOlwiU2lyYnVcIixcImVtYWlsXCI6XCJzaXJidW5pY29sYWVjZXphckBnbWFpbC5jb21cIixcImF2YXRhclVybFwiOm51bGwsXCJyb2xlc1wiOltcIlJPTEVfQURNSU5cIixcIlJPTEVfVVNFUlwiXSxcInZpc2libGVDb21wb25lbnRzXCI6W1wiYXNzZXQtY2F0YWxvZ1wiLFwidmVydGljYWwtbGluZWFnZVwiLFwiYXNzZXQtbGluZWFnZVwiLFwiYWJvdXRcIixcImVuZC10by1lbmRcIixcIipcIixcInJlcG9zaXRvcnktZXhwbG9yZXJcIixcImFzc2V0LWxpbmVhZ2UtcHJpbnRcIixcImdsb3NzYXJ5XCIsXCJ1bHRpbWF0ZS1kZXN0aW5hdGlvblwiLFwiYXNzZXQtZGV0YWlsc1wiLFwidWx0aW1hdGUtc291cmNlXCIsXCJ0eXBlLWV4cGxvcmVyXCIsXCJhc3NldC1kZXRhaWxzLXByaW50XCIsXCJsaW5lYWdlLWltcG9ydFwiXX0ifQ');
    (parseJwt as jest.Mock).mockReturnValue(sub);

    expect(hasComponent('Component3')).toBe(false);
  });
});
