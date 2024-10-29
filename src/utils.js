function sum(a, b) {
  return a + b;
}

function isOdd(num) {
  return num % 2 !== 0;
}

function isEven(num) {
  return num % 2 === 0;
}

function isPrime(num) {
  if (num == 2) return true;
  if (num <= 1 || isEven(num)) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

function kabataku(num) {
  return num + num * num / num - num;
}

function factorial(num) {
  if (num <= 1) return 1
  return num * factorial(num - 1)
}

module.exports = {
  sum,
  isOdd,
  isEven,
  isPrime,
  kabataku,
  factorial,
};
