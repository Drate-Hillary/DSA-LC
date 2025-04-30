/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    
    const wordSet = new Set(wordList);
    if(!wordSet.has(endWord)) return 0;

    const queue = [[beginWord, 1]];
    const visited = new Set();
    visited.add(beginWord);

    while(queue.length > 0){

        const [currentWord, level] = queue.shift();

        if(currentWord === endWord){
            return level;
        }

        for(let i = 0; i < currentWord.length; i++){
            for(let c = 97; c <= 122; c++){
                const char = String.fromCharCode(c);
                if(char !== currentWord[i]){
                    const newWord = currentWord.substring(0, i) + char + currentWord.substring(i + 1);

                    if(wordSet.has(newWord) && !visited.has(newWord)){
                        visited.add(newWord);
                        queue.push([newWord, level + 1]);
                    }  
                }
            }
        }
    }

    return 0;
};