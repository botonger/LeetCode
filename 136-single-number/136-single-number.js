/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length === 1) return nums[0]
    let aa = 1

    return nums.sort((a,b)=> a-b).reduce((a,b)=>{
        aa *= -1
        return a + aa*b
    })
};