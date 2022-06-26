/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length === 1) return nums[0]
    let sum = 0
    let aa = 1

    nums.sort((a,b)=> a-b)
    for(let i of nums){
        sum += (aa*i)
        aa *= (-1)
    }
    return sum
    
};