/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    
    let count = 0;

    const backtrack = (row, cols, diag1, diag2) => {
        if(row === n){
            count++;
        }

        for(let col = 0; col < n; col++){
            const d1 = row - col;
            const d2 = row + col;

            if(cols.has(col) || diag1.has(d1) || diag2.has(d2)){
                continue;
            }

            cols.add(col);
            diag1.add(d1);
            diag2.add(d2);

            backtrack(row + 1, cols, diag1, diag2);

            cols.delete(col);
            diag1.delete(d1);
            diag2.delete(d2);
        }
    }

    backtrack(0, new Set(), new Set(), new Set());
    return count;
};