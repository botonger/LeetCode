/**
 * @param {number} n
 * @return {number}
 */
res = new Map()
var climbStairs = function(n) {
    let result
    if(res.hasOwnProperty(n)){
        return res[n]
    }
    if(n <= 2) {
        result = n
    } else {
        result = climbStairs(n-1) + climbStairs(n-2)
    }
    res[n] = result
    return result
}