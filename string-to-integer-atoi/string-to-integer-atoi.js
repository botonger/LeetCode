/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let converted =  /^[\s]*[+-]?[0-9]+/.exec(s)
    const r = converted? converted[0].trim()*1 : 0;
    
    if(r <= 2**31*-1) return 2**31*-1;
    if(r >= 2**31-1) return 2**31-1;
    return r;

};