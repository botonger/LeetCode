/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res = []
    
    for(let i=1;i< n+1;i++){
        let temp = ''
        if(i%15===0) temp = "FizzBuzz"
        else if(i%3===0) temp = "Fizz"
        else if(i%5===0) temp = "Buzz"
        
        res.push(temp || String(i))
    }
    return res
};