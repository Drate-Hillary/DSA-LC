/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();

    let sign = 1;
    let index = 0;
    if (s[index] === '+' || s[index] === '-') {
        if (s[index] === '-') {
            sign = -1;
        }
        index++;
    }

    let result = 0;
    while (index < s.length && s[index] >= '0' && s[index] <= '9') {
        result = result * 10 + (s[index] - '0');
        index++;
    }

    result *= sign;

    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;
    if (result < INT_MIN) {
        return INT_MIN;
    }
    if (result > INT_MAX) {
        return INT_MAX;
    }

    return result;
};