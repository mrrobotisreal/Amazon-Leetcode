// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 // Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

function maxProfit(prices: number[]): number{
  let buy: number = prices[0];
  prices[0] = 0;
  let profit: number = 0;

  for (let i: number = 0; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
      prices[i] = 0;
    } else {
      profit = Math.max(prices[i] - buy, profit);
    }
  }

  return profit;
}







/* First two attempts */

// function maxProfit(prices: number[]): number {
//   let profit: number = 0;
//   interface Price {
//     price: number,
//     buyIndex: number,
//     sellIndex: number,
//   }
//   let lowest: Price = {
//     price: Math.max(...prices),
//     buyIndex: 0,
//     sellIndex: 0,
//   };
//   let highest: Price = {
//     price: Math.min(...prices),
//     buyIndex: 0,
//     sellIndex: 0,
//   }
//   let highestProfits: number[] = [];
//   let profits: number[][] = [];

//   for (let i: number = 0; i < prices.length; i++) {
//     let currentProfits: number[] = [];
//     for (let j: number = 0; j < prices.length; j++) {
//       let greatest: Price = {
//         price: null,
//         buyIndex: null,
//         sellIndex: null,
//       };
//       if (j === i || j < i) {
//         continue;
//       }
//       greatest.price
//       // currentProfits.push(prices[j] - prices[i]);
//     }
//     profits.push(currentProfits);
//     highestProfits.push(Math.max(...currentProfits));
//   }

//   return profit;
// };

// function maxProfit(prices: number[]): number {
//   let profit: number = 0;
//   interface Price {
//     price: number,
//     index: number,
//   }
//   let lowest: Price = {
//     price: Math.max(...prices),
//     index: 0,
//   };
//   let highest: Price = {
//     price: Math.min(...prices),
//     index: 0,
//   }
//   let lowestPrices:number[] = [];
//   let highestPrices:number[] = [];

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < lowest.price) {
//       lowest.price = prices[i];
//     }
//     if (prices[i] > highest.price) {
//       highest.price = prices[i];
//     }
//   }

//   return profit;
// };