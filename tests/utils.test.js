const Utils = require("../src/utils");

describe("test some utils", () => {
  const utils = new Utils();

  test("sum: a + b", () => {
    expect(utils.sum(1, 2)).toBe(3);
    expect(utils.sum(2, 5)).toBe(7);
    expect(utils.sum(3, 2)).not.toBe(6);  // should be 5
  });

  test("isOdd", () => {
    expect(utils.isOdd(3)).toBeTruthy();
    expect(utils.isOdd(5)).toBeTruthy();
    expect(utils.isOdd(13)).toBeTruthy();
    expect(utils.isOdd(4)).toBeFalsy();
  });

  test("isEven", () => {
    expect(utils.isEven(4)).toBeTruthy();
    expect(utils.isEven(10)).toBeTruthy();
    expect(utils.isEven(22)).toBeTruthy();
    expect(utils.isEven(3)).toBeFalsy();
  });

  test("isPrime", () => {
    expect(utils.isPrime(2)).toBeTruthy();
    expect(utils.isPrime(5)).toBeTruthy();
    expect(utils.isPrime(17)).toBeTruthy();
    expect(utils.isPrime(1)).toBeFalsy();
    expect(utils.isPrime(27)).toBeFalsy();
  });

  test("kabataku", () => {
    expect(utils.kabataku(5)).toBe(5);
    expect(utils.kabataku(3)).toBe(3);
    expect(utils.kabataku(2)).not.toBe(3);  // should be 2
  });

  test("factorial", () => {
    expect(utils.factorial(5)).toBe(120);
    expect(utils.factorial(4)).toBe(24);
    expect(utils.factorial(7)).not.toBe(720); // should be 5040
  });
});
