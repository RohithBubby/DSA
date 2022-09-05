/*

    Insertion sort 
        here it assumes that first element is sorted and then it takes one element from the right and 
        compares with each element on the left and swaps it if the element is greater.

    Time complexity is
    worst -  O(n^2)
    average - n^2
    best - n
*/

//my solution
function sw(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(sw([5, 1, 2, 9, -5]));

// video solution
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

const arr = [8, 20, -2, 4, -6];
insertionSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]
