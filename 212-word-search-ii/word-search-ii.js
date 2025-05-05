/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

class TrieNode{
    constructor(){
        this.children = {};
        this.word = null;
    }
}

var findWords = function(board, words) {
    
    const root = new TrieNode();

    for(const word of words){
        let node = root;
        for(const char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.word = word;
    }

    const result = [];
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const dfs = (node, i, j) => {
        const char = board[i][j];
        if(!node.children[char]) return;

        const currentNode = node.children[char];

        if(currentNode.word !== null){
            result.push(currentNode.word);
            currentNode.word = null;
        }

        board[i][j] = '#';

        for(const [di, dj] of directions){
            const ni = i + di, nj = j + dj;

            if(ni >= 0 && ni < board.length && nj >= 0 && nj < board[0].length && board[ni][nj] !== '#'){
                dfs(currentNode, ni, nj);
            }
        }
        board[i][j] = char;
    };

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            const char = board[i][j];
            if(root.children[char]){
                dfs(root, i, j);
            }
        }
    }

    return result;

};