// 1. reverse string

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

// 2. palindrome

const palindrome = (str) => {
  return str.split("").reverse().join("") === str;
};

console.log(palindrome("apple"));
console.log(palindrome("cddc"));
console.log(palindrome("abba"));

// 3. int reversal

const intReversal = (n) => {
  // return Number(String(n).split("").reverse().join(""));
  return parseInt(n.toString().split("").reverse().join(""));
};

console.log(intReversal(123456));

// 4. sentence capitalization

const sentenceCapitalization = (sentence) => {
  return sentence
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word.at(0).toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(sentenceCapitalization("apple apple"));

// 5. fizzbuzz

const fizzBuzz = (n) => {
  const results = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push("FizzBuzz");
    } else if (i % 3 === 0) {
      results.push("Fizz");
    } else if (i % 5 === 0) {
      results.push("Buzz");
    } else {
      results.push(i);
    }
  }

  return results;
};

console.log(fizzBuzz(10));

console.log(fizzBuzz(15));

// max profit

const maxProfit = (prices) => {
  let minPrice = prices[0]; // Assume the first day is the cheapest to buy
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i]; // 1

    minPrice = Math.min(minPrice, currentPrice); // min - 7, curr - 1 minPrice = 1

    const potentialProfit = currentPrice - minPrice; // curr - 1, min - 1 p - 0

    maxProfit = Math.max(maxProfit, potentialProfit); // 0
    console.log(maxProfit);
  }

  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log("Maximum profit:", profit);

// Array chunk
const chunk = (array, size) => {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    chunked.push(chunk);
    index += size;
  }
  return chunked;
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 7));
