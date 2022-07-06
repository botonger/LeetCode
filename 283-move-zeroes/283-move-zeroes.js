/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const s = nums.length
    
    for(let i=0;i<s-1;i++){
        if(nums[i]===0){
            nums.splice(i,1)
            i=i-1
        } else continue
    }
    for(let j = 0, n = s-nums.length;j < n;j++){
        nums.push(0)
    }
};