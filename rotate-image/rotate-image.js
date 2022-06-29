/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let length = matrix[0].length - 1
    
    for(let j = length ; j >= 0 ; j--){
        for(let i = 0 ; i < matrix.length ; i++){
            matrix[j].unshift(matrix[i].pop())
        }
    }
};