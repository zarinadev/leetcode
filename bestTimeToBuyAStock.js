// Problem 121 (let)

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


//APPROACH
//This is 2  times pass aproach
//buy on each day
//find the largest difference by selling on some day in buyDays' future. 
//buy Day is i.

function bestTimeToBuy(prices){
    let maxprofit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
                let profit = prices[j] - prices[i];
            if (profit > maxprofit)
                maxprofit = profit;
        }
    }
    return maxprofit;
    }

//Time Complexity = O(n^2)   because we have nested loop
//Space Complexity = 0(1) because we only keep track of largest difference




//This is 1 time approach


//keep track of the best buy day so far;
// keep track of the largest difference so far


function findBestTimeToSell(prices) {
    const largestDifference = 0;
    const minSoFar = Number.MAX_VALUE

    for( let i=0; i<prices.length; i++){
        if(prices[i] < minSoFar) {
            minSoFar = prices[i]
        } else {
            largestDifference= Math.max(largestDifference,prices[i] - minSoFar)
        }
    }
    return largestDifference
}

//Time Complexity is O(n)  beacuse we only loop array once, whenever we find number smaller we assign it
//Space Complexity O(1)




