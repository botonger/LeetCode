/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // return nums.map(num => num*num).sort((a,b)=>a-b)
    
    let res = new Array(nums.length);
    let l = 0;
    let r = nums.length - 1;
    let i = nums.length - 1;
    
    while(r >= l){
        if(Math.abs(nums[l]) > Math.abs(nums[r])){
            res[i] = Math.pow(nums[l], 2)
            l++
        } else {
            res[i] = Math.pow(nums[r], 2)
            r--
        }
        i--
    }
    return res;
};