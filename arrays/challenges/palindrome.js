// palindrome

const palindrome = (str) => {
  return str.split("").reverse().join("") === str;
};

console.log(palindrome("apple"));
console.log(palindrome("cddc"));
console.log(palindrome("abba"));
