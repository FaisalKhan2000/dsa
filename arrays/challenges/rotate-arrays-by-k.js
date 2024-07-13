/*
  Rotate an array `nums` by `k` positions to the left.

  Adjust `k` if it exceeds the array length to optimize rotations.
  Extract the last `k` elements from `nums` to rotate.
  Insert the rotated elements at the beginning of `nums`.
  Return the rotated array `nums`.

  Example usage:
  console.log(rotateArrayByK([1, 2, 3, 4, 5, 6, 7], 3)); // Output: [5, 6, 7, 1, 2, 3, 4]
  console.log(rotateArrayByK([-1, -100, 3, 99], 2));   // Output: [3, 99, -1, -100]
*/

const rotateArrayByK = (nums, k) => {
  let size = nums.length;
  // if k is greater than size than we will rotate it using this condition
  if (k > size) {
    k = k % size;
  }

  const rotated = nums.splice(size - k, size);
  nums.unshift(...rotated);
  return nums;
};

console.log(rotateArrayByK([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArrayByK([-1, -100, 3, 99], 2));

const rotateArrayByKOptimized = (nums, k) => {
  let size = nums.length;
  // if k is greater than size than we will rotate it using this condition
  if (k > size) {
    k = k % size;
  }
};
