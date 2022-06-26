/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let basket = {}
    if(s.length !== t.length) return false
    
    for(i of s){
        if(basket[i] === undefined) basket[i] = 1
        else basket[i] += 1       
    }

    for(j of t){
        if(basket[j] === undefined || basket[j] === 0) return false
        else basket[j] -= 1
    }
    console.log(basket)
    return true
};