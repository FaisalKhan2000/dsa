// integer reversal

const intReversal = (n) => {
  // return Number(String(n).split("").reverse().join(""));
  return parseInt(n.toString().split("").reverse().join(""));
};

console.log(intReversal(123456));
