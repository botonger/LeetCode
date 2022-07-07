/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const mapper = {"(": ")", "{": "}", "[":"]"}
    
    let stack = [];
    
    for(let c of s) {
        if(c in mapper) {
            stack.push(c)
        }else {
            let open = stack.pop()
            if(c !== mapper[open]) {
                return false
            }
        }
    }
    
    return !stack.length
    
};
    
