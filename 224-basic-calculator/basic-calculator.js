/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [];
    let num = 0;
    let res = 0;
    let sign = 1;

    for(let i = 0; i < s.length; i++){
        let char = s[i];

        if(/\d/.test(char)){
            num = num * 10 + parseInt(char, 10);
        }else if(char === '+' || char === '-'){
            res += sign * num;
            num = 0;
            sign = char === '+' ? 1 : -1;
        }else if(char === '('){
            stack.push(res);
            stack.push(sign);

            res = 0;
            sign = 1;
        }else if(char === ')'){
            res += sign * num;
            num = 0;

            res *= stack.pop();
            res += stack.pop();
        }
    }

    res += sign * num;
    return res;
};