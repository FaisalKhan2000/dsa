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

/*
  Rotate an array `nums` by `k` positions to the left.

  1. Adjust `k` if it exceeds the array length to optimize rotations.
  2. Reverse the entire array.
  3. Reverse the first `k` elements.
  4. Reverse the remaining elements.
  5. Return the rotated array `nums`.

  Example usage:
  console.log(rotateArrayByKReversed([1, 2, 3, 4, 5, 6, 7], 3)); // Output: [5, 6, 7, 1, 2, 3, 4]
  console.log(rotateArrayByKReversed([-1, -100, 3, 99], 2));    // Output: [3, 99, -1, -100]
*/
const rotateArrayByKOptimized = (nums, k) => {
  let size = nums.length;
  // if k is greater than size than we will rotate it using this condition
  if (k > size) {
    k = k % size;
  }

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
};

/*
  Reverse the elements of the array `nums` between the indices `left` and `right`.

  1. Initialize a loop that runs as long as `left` is less than `right`.
  2. Swap the elements at `nums[left]` and `nums[right]`.
  3. Increment `left` and decrement `right`.
  4. Continue until the entire segment between `left` and `right` is reversed.
  5. Return the modified array `nums`.

  Example usage:
  console.log(reverse([1, 2, 3, 4], 0, 3)); // Output: [4, 3, 2, 1]
*/

function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;

    left++;
    right--;
  }
  return nums;
}

console.log(reverse([1, 2, 3, 4], 0, 3));
console.log(rotateArrayByKOptimized([1, 2, 3, 4, 5, 6, 7], 3));
