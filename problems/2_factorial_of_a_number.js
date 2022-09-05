/*

    Problem - given a number n, find the factorial of that number

    given a positive integer factorial of that number is equal to the product of all the numbers less than or equal to n
    
    0! = 1
    4! = 4*3*2*1 = 24

    Time complexity is O(n)
*/

function factorial(n) {
  let total = 1;

  for (let i = 1; i <= n; i++) {
    total = total * i;
  }

  return total;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120

/*
    Recurssive solution 
    time complexity is O(n)
*/
function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(5)); // 120
