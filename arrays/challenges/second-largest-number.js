/*
  Find the second largest number in an array `arr`.

  Convert `arr` to a set to remove duplicates and obtain unique elements.
  If there are at least two unique elements:
    - Sort the unique elements in descending order.
    - Return the second largest element.
  If there are fewer than two unique elements, return -1.

  Example usage:
  console.log(secondLargestNumber([12, 35, 1, 10, 34, 1])); // Output: 34
  console.log(secondLargestNumber([10, 5, 10]));           // Output: 5
  console.log(secondLargestNumber([10]));                  // Output: -1
*/
const secondLargestNumber = (arr) => {
  const uniqueArr = Array.from(new Set(arr)); // set contains only unique elements
  if (uniqueArr.length >= 2) return uniqueArr.sort((a, b) => b - a)[1];

  return -1;
};

console.log(secondLargestNumber([12, 35, 1, 10, 34, 1]));
console.log(secondLargestNumber([10, 5, 10]));
console.log(secondLargestNumber([10]));

/*
  Find the second largest number in an array `arr` using an optimized approach.

  Initialize `largest` and `secondLargest` to negative infinity.
  Traverse through each element of `arr`:
    - Update `largest` and `secondLargest` based on current element conditions.
  Return `secondLargest` after iterating through the array.

  Example usage:
  console.log(secondLargestNumberOptimized([12, 35, 1, 10, 34, 1])); // Output: 34
  console.log(secondLargestNumberOptimized([10, 5, 10]));           // Output: 5
  console.log(secondLargestNumberOptimized([10]));                  // Output: undefined or negative infinity (No second largest element)
*/

const secondLargestNumberOptimized = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    // current is greater then largest
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];

      // current is not equal (to not consider duplicates)
      // current is greater than second largest
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};

console.log(secondLargestNumberOptimized([12, 35, 1, 10, 34, 1]));
console.log(secondLargestNumberOptimized([10, 5, 10]));
console.log(secondLargestNumberOptimized([10]));
