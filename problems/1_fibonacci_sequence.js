/*
    Problem: given a number n, find the first n elements of the fibonacci sequence

    fibonacci sequence is a sequence in which each number is sum of its previous 2 numbers

    first two numbers are always 0,1


    time complexity of solution below is O(n)
*/

function fibonacci(n) {
  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
}

console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(3)); // [0,1,1]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]

/*
    This is recursive solution for getting nth element in fibonacci sequence
    
    time complexity of recurssive solution is O(2^n)
*/
function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(7)); // 8
