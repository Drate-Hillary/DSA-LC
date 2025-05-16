/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    const rows = board.length;
    const cols = board[0].length;

    function dfs(row, col, index){
        if(index === word.length) return true;

        if(row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== word[index] ){
            return false
        }

        const temp = board[row][col];
        board[row][col] = '#';

        const found = dfs(row + 1, col, index + 1) || dfs(row - 1, col, index + 1) || dfs(row, col + 1, index + 1) || dfs(row, col - 1, index + 1);

        board[row][col] = temp;

        return found;
    }

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(board[r][c] === word[0] && dfs(r, c, 0)){
                return true;
            }
        }
    }

    return false;
};