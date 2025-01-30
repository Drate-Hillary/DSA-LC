class Solution {
    fun productExceptSelf(nums: IntArray): IntArray {
        var n = nums.size;
        var res = IntArray(n){1}

        var prefix = 1;
        for(i in nums.indices){
            res[i] = prefix;
            prefix *= nums[i];
        }

        var suf = 1;
        for(j in nums.indices.reversed()){
            res[j] *= suf;
            suf *= nums[j];
        }

        return res;

    }
}