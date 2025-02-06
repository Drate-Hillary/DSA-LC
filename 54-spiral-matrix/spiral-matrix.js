/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];

    if(!matrix.length || !matrix[0].length) return res;

    let top = 0, bottom = matrix.length - 1;
    let a = 0, b = matrix[0].length - 1;

    while(top <= bottom && a <= b){
        for(let i = a; i <= b; i++){
            res.push(matrix[top][i]);
        }
        top++;

        for(let i = top; i <= bottom; i++){
            res.push(matrix[i][b]);
        }
        b--;

        if(top <= bottom){
            for(let j = b; j >= a; j--){
                res.push(matrix[bottom][j]);
            }
            bottom--;
        }

        if(a <= b){
            for(let k = bottom; k >= top; k--){
                res.push(matrix[k][a]);
            }
            a++;
        }
    }

    return res;
};