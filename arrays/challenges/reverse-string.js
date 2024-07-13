// reverse string

// convert string to array split(""), [...string], Array.from()
// reverse array using .reverse
// convert array back to string join("")

const reverseString = (str) => {
  if (str.length < 1) return "enter a valid string";
  if (str.length === 1) return str;
  return str.split("").reverse().join("");
};

console.log(reverseString("apple"));
console.log(reverseString(""));
console.log(reverseString("a"));
