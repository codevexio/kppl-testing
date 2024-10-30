class Utils {
  sum(a, b) {
    return a + b;
  }

  isOdd(num) {
    return num % 2 !== 0;
  }

  isEven(num) {
    return num % 2 === 0;
  }

  isPrime(num) {
    if (num <= 1 || (this.isEven(num) && num !== 2)) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      return num % i !== 0;
    }

    return true;
  }

  kabataku(num) {
    return num + (num * num) / num - num;
  }

  factorial(num) {
    if (num <= 1) return 1;
    return num * this.factorial(num - 1);
  }
}

module.exports = Utils;
