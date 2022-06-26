/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, res = 0) {
    let midIdx = Math.floor(nums.length/2)
    if(nums[midIdx] === target) {
        res += midIdx
        return res
    }
    else if(nums[midIdx] > target){
        return search(nums.splice(0, midIdx), target, res)
    } else if(nums[midIdx] < target){
        res += (midIdx+1)
        return search(nums.splice(midIdx+1), target, res)
    }
    return -1
};