/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let count ={}
    let result = []
    
    for(let i of nums1){
        if(count[i]) count[i]+= 1
        else count[i] =1 
    }
    for(let i of nums2){
        if(count[i] && count[i]!=0) {
            count[i] -= 1
            result.push(i)
        }
    }
    return result
};