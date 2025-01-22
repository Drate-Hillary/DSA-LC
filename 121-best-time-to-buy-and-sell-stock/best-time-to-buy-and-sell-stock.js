/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length === 0) return 0;

    let minPrice = Infinity;
    let maxProfit = 0;

    for(const price of prices){
        if(price < minPrice){
            minPrice = price;
        }else{
            const profit = price - minPrice;
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    return maxProfit;
};