/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let m = 0;
        
    while(nums.length>1){
        i = Math.floor(nums.length/2)
        if(nums[i]===target) return m+i

        if(nums[i]>target){
            nums.splice(i)
        } else {
            nums.splice(0,i)
            m = m + i
        }
    }
    
    if(nums.length === 1){
        return nums[0] < target ? m+1: nums[0] > target ? m : 0
    }
  
};