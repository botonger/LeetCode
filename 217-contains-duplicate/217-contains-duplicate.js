/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map()
    for (let i of nums){
        if(map.has(i)) return true
        else map.set(i, 1)
    }
    return false
    
};