/**
 * @param {number} n
 * @return {number}
 */

fibMap = new Map()
var fib = function(n) {

    let result
    if (fibMap.hasOwnProperty(n)) {
        return fibMap[n]
    }
    if(n<2) {
        result = n
    } else {
        result =  fib(n-1) +fib(n-2)
    }
    
    fibMap[n] = result
    return result
};