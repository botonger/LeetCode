/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    
    const bits = n.toString(2);    
    const d = 32 - bits.length;
    let res = 0;
    
    for(let i=bits.length-1;i>=0;i--){
        res += bits[i]*(2**(i+d));
    }
    return res;    
};