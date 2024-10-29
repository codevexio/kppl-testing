const {
  sum,
  isOdd,
  isEven,
  isPrime,
  kabataku,
  factorial,
} = require("../src/utils");

describe("test utils", () => {
  test("sum: a + b", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 5)).toBe(7);
    expect(sum(3, 2)).not.toBe(6);
  });

  test("isOdd", () => {
    expect(isOdd(3)).toBeTruthy();
    expect(isOdd(5)).toBeTruthy();
    expect(isOdd(13)).toBeTruthy();
    expect(isOdd(4)).toBeFalsy();
  });

  test("isEven", () => {
    expect(isEven(4)).toBeTruthy();
    expect(isEven(10)).toBeTruthy();
    expect(isEven(22)).toBeTruthy();
    expect(isEven(3)).toBeFalsy();
  });

  test("isPrime", () => {
    expect(isPrime(2)).toBeTruthy();
    expect(isPrime(5)).toBeTruthy();
    expect(isPrime(17)).toBeTruthy();
    expect(isPrime(1)).toBeFalsy();
    expect(isPrime(27)).toBeFalsy();
  });

  test("kabataku", () => {
    expect(kabataku(5)).toBe(5);
    expect(kabataku(3)).toBe(3);
    expect(kabataku(2)).not.toBe(3);
  });

  test("factorial", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(4)).toBe(24);
    expect(factorial(7)).not.toBe(720);
  });
});
