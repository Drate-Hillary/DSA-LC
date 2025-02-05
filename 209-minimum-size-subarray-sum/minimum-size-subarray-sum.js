/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let k = 0;
    let sum = 0;
    let minLength =Infinity;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];

        while(sum >= target){
            minLength = Math.min(minLength, i - k + 1);
            sum -= nums[k];
            k++;
        }

    }

    return minLength === Infinity ? 0 : minLength;
};