/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    if(x === 0 || x === 1) return x;
    
    let l = 0; let r = x; let m;
    
    while(true) {
        m = Math.floor((l + r)/2);
        
        if(m * m === x) {
            return m;
        }
        else if(m * m > x) {
            r = m;
        }
        else {
            l = m;
        }
        
        if(m === l && r-m === 1) break;
    }
    return m;
    
};