/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
    const result = [];

    function backtrack(start, current, remaining){
        if(remaining === 0){
            result.push([...current]);
        }

        for(let i = start; i < candidates.length; i++){
            if(candidates[i] > remaining) continue;

            current.push(candidates[i]);
            backtrack(i, current, remaining - candidates[i]);
            current.pop();
        }
    
    }

    backtrack(0, [], target);
    return result;
};