/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let r = 0
    let f = 1
    if(x<0){
        x = Math.abs(x)
        f = -1
    }
    

    while(true){
        r = r * 10 + x % 10
        x = Math.floor(x / 10)
        if(x === 0) break
    }
    
    if(Math.log(r)/Math.log(2) > 31) return 0

    return r * f
};