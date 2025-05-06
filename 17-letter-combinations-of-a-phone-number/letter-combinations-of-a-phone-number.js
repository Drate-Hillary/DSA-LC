/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    if(digits.length === 0) return [];

    const digitToLetters = {
        '2' : 'abc',
        '3' : 'def',
        '4' : 'ghi',
        '5' : 'jkl',
        '6' : 'mno',
        '7' : 'pqrs',
        '8' : 'tuv',
        '9' : 'wxyz'
    };

    const result = [];

    const backtrack = (index, currentCombination) => {
        if(index === digits.length){
            result.push(currentCombination);
            return;
        }

        const currentDigit = digits[index];
        const letters = digitToLetters[currentDigit];

        for(const letter of letters){
            backtrack(index + 1, currentCombination + letter);
        }
    }

    backtrack(0, '');
    return result;
};