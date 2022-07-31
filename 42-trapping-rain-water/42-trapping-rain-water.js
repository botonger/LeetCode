/**
 * @param {number[]} height
 * @return {number}
 * TODO: 다시 풀기: time limit exceeded [0,1,2,3,...,14999]
 */
var trap = function(height) {    
    res = height.reduce((a,b) => a+b) * -1;
    
    while(true){      
        max = Math.max(...height);
        start = height.indexOf(max);
        end = height.lastIndexOf(max);
        
        if(start === end) {
            height[start] -= 1;
            res += 1;
        }
        else {
            height = [...height.slice(0,start+1),...height.slice(end+1)]
            res += (max * (end-start));
        }
        
        if(height.length === 1) {
            res += height[0];
            break;
        }
    }
    return res;
};
