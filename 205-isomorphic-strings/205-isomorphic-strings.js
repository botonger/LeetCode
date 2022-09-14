/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    map = new Map();
    for(let i in s) {

        if(map.has(s[i]) && map.get(s[i]) != t[i]) {
            return false;
        } else {
            map.set(s[i], t[i]);
        }
    }
    return new Set([...map.keys()]).size == new Set([...map.values()]).size    
};