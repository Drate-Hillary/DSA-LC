/**
 * @param {number[][]} board
 * @return {void}
 */
var gameOfLife = function(board) {
    if (!board || board.length === 0) return;

    const rows = board.length;
    const cols = board[0].length;

    const originalBoard = board.map(row => [...row]);

    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let liveNeighbors = 0;
            for (const [dx, dy] of directions) {
                const ni = i + dx;
                const nj = j + dy;
                if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && originalBoard[ni][nj] === 1) {
                    liveNeighbors++;
                }
            }

            if (originalBoard[i][j] === 1) {
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    board[i][j] = 0;
                }
            } else {
                if (liveNeighbors === 3) {
                    board[i][j] = 1; 
                }
            }
        }
    }
};