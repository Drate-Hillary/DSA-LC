/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const size = ratings.length;
    const candies = new Array(size).fill(1);

    for(let i = 0; i < size; i++){
        if(ratings[i] > ratings[i-1]){
            candies[i] = candies[i-1] + 1;
        }
    }

    for(let j = size - 2; j >= 0; j--){
        if(ratings[j] > ratings[j+1]){
            candies[j] = Math.max(candies[j], candies[j+1]+1);
        }
    }

    return candies.reduce((sum, candy)=> sum + candy, 0);
};