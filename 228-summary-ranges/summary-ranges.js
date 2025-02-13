/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const ran = [];
    let i = 0;

    while(i < nums.length){
        let start = nums[i];

        while(i + 1 < nums.length && nums[i + 1] === nums[i] + 1){
            i++;
        }

        let end = nums[i];
        ran.push(start === end ? `${start}` : `${start}->${end}`);
        i++;
    }

    return ran;

};