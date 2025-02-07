/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    if (!board || board.length === 0) return;

    const rows = board.length;
    const cols = board[0].length;

    // Create a copy of the original board
    const originalBoard = board.map(row => [...row]);

    // Define the eight possible directions for neighbors
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    // Iterate through each cell in the grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Count the number of live neighbors
            let liveNeighbors = 0;
            for (const [dx, dy] of directions) {
                const ni = i + dx;
                const nj = j + dy;
                if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && originalBoard[ni][nj] === 1) {
                    liveNeighbors++;
                }
            }

            // Apply the rules to determine the next state
            if (originalBoard[i][j] === 1) {
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    board[i][j] = 0; // Cell dies
                }
            } else {
                if (liveNeighbors === 3) {
                    board[i][j] = 1; // Cell becomes alive
                }
            }
        }
    }
}