/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    
    const n = board.length;
    const target = n * n;
    const visited = new Set();
    const queue = [[1, 0]] // [current_level, move]

    while(queue.length > 0){
        const [current, moves] = queue.shift();

        if(current === target){
            return moves;
        }

        if(visited.has(current)){
            continue;
        }

        visited.add(current);

        for(let i = 1; i <= 6; i++){
            let next = current + i;

            if(next > target){
                break;
            }

            const [row, col] = labelToPosition(next, n);
            if(board[row][col] !== -1){
                next = board[row][col];
            }

            if(!visited.has(next)){
                queue.push([next, moves + 1])
            }
        }
    }

    return -1;
};

function labelToPosition(label, n){
    const row = n - Math.ceil(label / n);
    let col = (label - 1) % n;
    if((n - row) % 2 === 0){
        col = n - 1 - col;
    }

    return [row, col];
}