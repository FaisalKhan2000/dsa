/*
  Remove duplicates from a sorted array `arr` using splice.

  1. Check if the array is empty. If it is, return 0.
  2. Iterate through the array with a loop.
  3. If the current element is equal to the next element:
     a. Remove the next element using splice.
     b. Decrement the loop index to recheck the current position.
  4. Continue until all elements are processed.
  5. Return the length of the array without duplicates.

  Example usage:
  console.log(removeDuplicates([1, 1, 2])); // Output: 2
  console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5
  console.log(removeDuplicates([])); // Output: 0
*/

const removeDuplicates = (arr) => {
  if (arr.length === 0) return 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
      i--;
    }
  }
  return arr.length;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([]));

/*
  Remove duplicates from a sorted array `arr` using a two-pointer approach.

  1. Check if the array is empty. If it is, return 0.
  2. Initialize a pointer `i` at the beginning of the array.
  3. Iterate through the array with a pointer `j` starting from the second element.
  4. If the element at `i` is not equal to the element at `j`:
     a. Increment the pointer `i`.
     b. Update the element at `i` to the element at `j`.
  5. Continue the iteration until all elements are processed.
  6. Return the length of the array without duplicates (i.e., `i + 1`).

  Example usage:
  console.log(removeDuplicatesOptimized([1, 1, 2])); // Output: 2
  console.log(removeDuplicatesOptimized([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5
  console.log(removeDuplicatesOptimized([])); // Output: 0
*/

// without JS Methods - Two pointer Approach
const removeDuplicatesOptimized = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
};

console.log(removeDuplicatesOptimized([1, 1, 2]));
console.log(removeDuplicatesOptimized([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicatesOptimized([]));
