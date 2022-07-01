/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbols = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
    s = s.split("").map(el=>symbols[el])
    let sum = 0
    for(i=0;i<s.length-1;i++){
        if(s[i] < s[i+1]) s[i]*=-1
        sum += s[i]
    }
    return sum+s[s.length-1]
};