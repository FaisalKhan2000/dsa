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
