/*

    Problem - Given a number n, find if it is prime number or not

    A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers

    A number is prime number when it is divisible by 1 and itself

    Time complexity - O(sqrt(n))
    normally people solve in O(log n), O(n)

*/

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    // this will give us optimized solution with O(sqrt(n))
    //   for (let i = 2; i <= n / 2; i++) { - this would create time complexity of O(log n)
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
