/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const splited = haystack.split(needle);
    
    if(splited.length == 1) return -1;
    else return splited[0].length;
}