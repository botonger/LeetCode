/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^A-Za-z0-9]/g,'');
    
    l = 0;
    r = s.length-1;
    m = Math.floor(r/2);

    while(l <= m){     
        if(s[l] !== s[r]) return false;
        
        l = l + 1;
        r = r - 1;
    }
    return true;
};