/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dict = {}
    for (let i of nums){
        if(dict[i] === undefined) dict[i] = 1
        else return true
    }
    return false
    
};