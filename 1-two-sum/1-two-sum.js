/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let index = {}
    
    for(let i=0; i<nums.length;i++){
        let second = target - nums[i]
        
        if(second in index){
            return [i, index[second]]
        }else{
            index[nums[i]] = i
        }
        
    }
};
