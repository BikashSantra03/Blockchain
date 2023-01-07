// Question 1 of assignment 6

function find_largest(arr, index) {
  return arr[index - 1];
}

let arr = new Array(3, 45, 6, 7, 23, 5, 7, 8);

arr.sort((a, b) => b - a);

let numLargest = 3;
let num = find_largest(arr, numLargest);
console.log(`The ${numLargest}th largest number from the array is ${num}`);
