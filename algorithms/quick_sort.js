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
}

console.log(quickSort([4, 5, 3, 1, 10, 9]));
