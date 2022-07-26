import {
  authHeader,
  authHeaderWithContentType
} from './auth-header';

describe("authHeader()", () => {
  it("should retrieve a token", () => {
    Storage.prototype.getItem = jest.fn(() => 'test');

    expect(JSON.stringify(authHeader())).toBe(JSON.stringify({ "x-auth-token": "test" }));
  });

  it("should not retrieve a token", () => {
    Storage.prototype.getItem = jest.fn(() => '');

    expect(JSON.stringify(authHeader())).toBe(JSON.stringify({}));
  });


  it ("should retrieve with content type", () => {
    Storage.prototype.getItem = jest.fn(() => 'test');

    expect(JSON.stringify(authHeaderWithContentType())).toBe(JSON.stringify({ "x-auth-token": "test", "Content-Type": "application/json",
      "accept" : "application/json" }));
  });
});