/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let word = s.trim().split(" ");

    return word[word.length - 1].length;
};