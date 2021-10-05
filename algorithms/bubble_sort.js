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
