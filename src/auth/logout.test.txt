import { logout } from './logout';

describe(`Test logout`, () => {
  it(`should simply pass`, () => {
    jest.spyOn(console, "log");

    logout();

    expect(console.log).toHaveBeenCalledTimes(1);
  });

  it(`should really pass`, () => {
    const callbackFunction = {
      do: () => { console.log('callbackFunction'); }
    };

    jest.spyOn(callbackFunction, "do");
    jest.spyOn(console, "log");

    callbackFunction.do;

    logout(callbackFunction.do);

    expect(callbackFunction.do).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledTimes(2);
  });
});