
var WordDictionary = function() {
    this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    
    let node = this.root;
    for(const char of word){
        if(!node[char]){
            node[char] = {};
        }
        node = node[char];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.searchHelper(word, 0, this.root);
};

WordDictionary.prototype.searchHelper = function(word, index, node){
    if(index === word.length){
        return node.isEnd === true;
    }

    const char = word[index];

    if(char === '.'){
        for(const key in node){
            if(key !== 'isEnd' && this.searchHelper(word, index + 1, node[key])){
                return true;
            }
        }
        return false;
    }else{
        if(!node[char]){
            return false;
        }
        return this.searchHelper(word, index + 1, node[char]);
    }
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */