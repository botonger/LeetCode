/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n==0) return false
    if(n==1) return true
    // if(n<2) return false
    while(true) {
        n = n/3
        if(n===1) return true
        if(n%1 !==0) return false
    }
};