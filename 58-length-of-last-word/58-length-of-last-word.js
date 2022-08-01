/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const li = s.split(" ").filter(e=>e!=false).pop().length;
    return li;
};