/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const intMap = {
        'M':1000,
        'D': 500,
        'C':100,
        'L':50,
        'X':10,
        'V':5,
        'I':1
    }

    let total = 0;
    let prev = 0;

    for(let i = s.length - 1; i >= 0; i--){
        const curr = intMap[s[i]];

        if(curr < prev){
            total -= curr;
        }else{
            total += curr;
        }

        prev = curr;
    }

    return total;
};