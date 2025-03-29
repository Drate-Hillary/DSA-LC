/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    
    if(!board || board.length === 0) return;

    const rows = board.length;
    const cols = board[0].length;

    const dfs = (r, c) => {
        if(r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== 'O'){
            return;
        }

        board[r][c] = 'T';
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    for(let r = 0; r < rows; r++){
        if(board[r][0] === 'O') dfs(r, 0);
        if(board[r][cols - 1] === 'O') dfs(r, cols - 1);
    }

    for(let c = 0; c < cols; c++){
        if(board[0][c] === 'O') dfs(0, c);
        if(board[rows - 1][c] === 'O') dfs(rows - 1, c);
    }


    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(board[r][c] === 'O'){
                board[r][c] = 'X';
            }
            if(board[r][c] === 'T'){
                board[r][c] = 'O';
            }
        }
    }

};