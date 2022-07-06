/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let l = digits.length - 1;
    let r = 1;
    
    while(l>=0){
        let added = digits[l]+r
        r = added/10 >=1 ? 1:0
        digits[l] = added%10;
        l--;
    }
    if(r!==0) digits.unshift(1);
    return digits

}