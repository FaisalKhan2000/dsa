// Array Declaration and Initialization

// Initializing an array with fruit names
let arr = ["apple", "banana", "cherry"];

// Initializing an array with numbers
let numbers = new Array(1, 2, 3, 4, 5);

console.log(arr); // ["apple", "banana", "cherry"]

// Array Indexing

// Accessing elements by index
console.log(arr[0]); // apple
console.log(arr[1]); // banana
console.log(arr[2]); // cherry

// Adding Elements to an Array

// push - Appends new elements to the end of an array
arr.push("mango");
console.log(arr); // ["apple", "banana", "cherry", "mango"]

// unshift - Inserts at the start of the array
arr.unshift("strawberry");
console.log(arr); // ["strawberry", "apple", "banana", "cherry", "mango"]

// Removing Elements from an Array

// pop - Removes the last element from an array
arr.pop();
console.log(arr); // ["strawberry", "apple", "banana", "cherry"]

// shift - Removes the first element from an array
arr.shift();
console.log(arr); // ["apple", "banana", "cherry"]

// Looping through an Array

// Using a for loop to iterate over an array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // apple, banana, cherry
}

// Using a while loop to iterate over an array
let i = 0;
while (i < arr.length) {
  console.log(arr[i]); // apple, banana, cherry
  i++;
}

// Inbuilt Array Methods

// map - Creates a new array by adding 1 to each element of the numbers array
const addingOne = numbers.map((number) => number + 1);
console.log(addingOne); // [2, 3, 4, 5, 6]

// filter - Creates a new array with only the odd numbers from the numbers array
const oddArray = numbers.filter((number) => number % 2 !== 0);
console.log(oddArray); // [1, 3, 5]

// reduce - Sums all the elements in the numbers array
const sumOfArray = numbers.reduce((prev, curr) => prev + curr, 0);
console.log(sumOfArray); // 15

// some - Checks if any element in the numbers array is greater than 3
const isGreaterThan3 = numbers.some((number) => number > 3);
console.log(isGreaterThan3); // true

// every - Checks if all elements in the numbers array are greater than 69
const isGreaterThan69 = numbers.every((number) => number > 69);
console.log(isGreaterThan69); // false

// find - Finds the first element in the numbers array that is greater than 2
const findOne = numbers.find((number) => number > 2);
console.log(findOne); // 3

// Spread and Rest Operators

const num1 = [1, 2, 3];
const num2 = [3, 4, 5];

// Spread operator - Combines num1 and num2 arrays into finalNum array
const finalNum = [...num1, ...num2];
console.log(finalNum); // [1, 2, 3, 3, 4, 5]

// Rest operator - Converts the arguments into an array
function sum(...numbers) {
  return numbers;
}
console.log(sum(num1, num2, 5, "hello")); // [[1, 2, 3], [3, 4, 5], 5, "hello"]

// concat - Combines multiple arrays into one
const concatenatedArray = num1.concat(num2, [1, 2, 3]);
console.log(concatenatedArray); // [1, 2, 3, 3, 4, 5, 1, 2, 3]

// slice - Returns a section of an array
console.log(finalNum.slice(0, 2)); // [1, 2]

// splice - Removes elements from an array and returns them
console.log(finalNum.splice(0, 3)); // [1, 2, 3]
console.log(finalNum); // [3, 4, 5]

// fill - Changes all array elements to a static value
const newArray = ["apple", "mango", "banana"];
newArray.fill("apple");
console.log(newArray); // ["apple", "apple", "apple"]

// findIndex - Returns the index of the first element that matches the condition
const index = arr.findIndex((item) => item === "banana");
console.log(index); // 1 (after pop and shift, "banana" is at index 1)

// flat - Flattens a nested array up to the specified depth
const numbersArray = [[[1, 2, 3], 3, 4, 5], 6];
console.log(numbersArray.flat(1)); // [[1, 2, 3], 3, 4, 5, 6]
console.log(numbersArray.flat(2)); // [1, 2, 3, 3, 4, 5, 6]

// reverse - Reverses the order of elements in an array
const reverseArray = arr.reverse();
console.log(reverseArray); // ["cherry", "banana", "apple"]

// sort - Sorts the elements of an array
const unSorted = [2, 4, 3, 1, 6, 5, 10, 9, 8, 0];
const sorted = unSorted.sort((a, b) => a - b);
console.log(sorted); // [0, 1, 2, 3, 4, 5, 6, 8, 9, 10]
