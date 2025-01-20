/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const res = [];
    let line = [];
    let lineLength = 0;

    for(const word of words){
        if(lineLength + line.length + word.length > maxWidth){
            for(let i = 0; i < maxWidth - lineLength; i++){
                line[i % (line.length - 1 || 1)] += ' ';
            }
            res.push(line.join(''));
            line = [];
            lineLength = 0;
        }

        line.push(word);
        lineLength += word.length;
    }

    res.push(line.join(' ') + ' '.repeat(maxWidth - lineLength - (line.length - 1)));
    return res;
};