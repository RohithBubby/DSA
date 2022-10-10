/*
  Quick sort is an algorithm where
    we pick any element from the array as pivot
    then we go through the array and split them to 2 arrays 
    if element is lesser than pivot we store in left array else in right array

    we repeat this by calling method with left and rigth array until the elements in passed array is 1

    then we concat the elements like left, pivot, right = this is will give sorted array

  Time complexity is
    worst -  O(n^2)
    average - n log n
    best - n log n
*/

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let left = [];
  let right = [];
  let tmp = [];

  let pivot = arr.pop();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return tmp.concat(quickSort(left), pivot, quickSort(right));
  //return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([4, 5, 3, 1, 10, 9]));
