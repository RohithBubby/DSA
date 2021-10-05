function merge(left, right) {
  let i = 0;
  let j = 0;
  let tmp = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      tmp.push(left[i]);
      i++;
    } else {
      tmp.push(right[j]);
      j++;
    }
  }

  return tmp.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = arr.splice(0, middle);
  return merge(mergeSort(left), mergeSort(arr));
}

console.log(mergeSort([4, 7, 5, 9, 1, 3, 8, 2]));
