/*

    Problem - Given a positive integer n, determine if the number is power of 2 or not.

*/

function fb(n) {
  if (n === 1) {
    return true;
  }

  if (n % 2 === 0) {
    return fb(n / 2);
  }

  return false;
}
console.log(fb(8)); // true - this takes time complexity of O(log n)

//   Optimal Solution with time complexity of O(1)

/* In binary a number that is power of 2, except for 1 ends with zero */

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false
