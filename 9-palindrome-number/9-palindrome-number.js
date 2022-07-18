/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    
    let t = x
    let r = 0
    
    while(true){
        r = r * 10 + x % 10
        x = Math.floor(x / 10)
        if(x === 0) break
    }
    
    return r === t
};