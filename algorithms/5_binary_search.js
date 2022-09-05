//binary search works only on sorted array

// time complexity is O(log n)

let arr = [1, 2, 3, 4];

let start = 0;
let end = arr.length - 1;
let target = 2;

while (end >= start) {
  let mid = Math.floor((end - start) / 2) + start;
  if (arr[mid] == target) {
    console.log("found");
    break;
  } else if (target > arr[mid]) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
