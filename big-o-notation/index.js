const getThirdElementOne = (arr) => {
  // 4 operations
  for (let i = 0; i < arr.length; i++) {
    if (i === 3) {
      return arr[i];
    }
  }
};

const getThirdElementTwo = (arr) => {
  // 1 operations
  return arr[3];
};

const measureExecutionTime = (func, arr) => {
  const startTime = performance.now();
  func(arr);
  const endTime = performance.now();
  return endTime - startTime;
};

console.log(measureExecutionTime(getThirdElementOne, [420, 96, 12, 69, 77])); // 0.011165999999999343
console.log(measureExecutionTime(getThirdElementTwo, [420, 96, 12, 69, 77])); // 0.005750000000002586
