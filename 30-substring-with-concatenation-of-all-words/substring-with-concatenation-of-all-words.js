/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if(!s || words.length === 0) return [];

    const wordLen = words[0].length;
    const wordCount = words.length
    const totalLen = wordLen * wordCount;
    const wordMap = new Map();
    const res = [];

    for(let word of words){
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }

    for(let i = 0; i < wordLen; i++){
        let a = i, b = i, count = 0;
        let seen = new Map();

        while(b + wordLen <= s.length){
            let word = s.substring(b, b + wordLen);
            b += wordLen;

            if(wordMap.has(word)){
                seen.set(word, (seen.get(word) || 0) + 1);
                count++;

                while(seen.get(word) > wordMap.get(word)){
                    let leftWord = s.substring(a, a+wordLen);
                    seen.set(leftWord, seen.get(leftWord) - 1);
                    count--;
                    a += wordLen;
                }

                if(count === wordCount){
                    res.push(a);
                }
            }else{
                seen.clear();
                count = 0;
                a = b;
            }
        }
    }

    return res;
};