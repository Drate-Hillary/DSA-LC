/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let n = nums.length;

    if(n === 1) return 0;

    let jumps = 0;
    let steps = nums[0];
    let maxReach = nums[0];

    for(let i = 1; i < n; i++){
        if(i === n - 1){
            return jumps + 1;
        }

        maxReach = Math.max(maxReach, i + nums[i]);
        steps--;

        if(steps === 0){
            jumps++;
            if(i >= maxReach){
                return -1;
            }
            steps = maxReach - i;
        }
    }

    return -1;
    
};