/*

 Bubble sort  is a simple sorting algorithm that repeatedly steps through the input list element by element,
  comparing the current element with the one after it, swapping their values if needed.

 time complexity is
  worst -  O(n^2)
  average - n^2
  best - n

*/

function bubbleSort(arr) {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([4, 5, 3, 1, 10, 9]));
