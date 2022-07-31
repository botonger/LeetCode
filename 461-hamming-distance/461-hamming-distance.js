/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    left = 0;
    right = 31;
    count = 0;
    n = Math.log(Math.max(x, y))/Math.log(2);
    while(true) {
        mid = Math.floor((left + right) / 2);
        if(mid === n) break;
        if(mid < n){
            left = mid;
            // console.log("left", mid);
        } else if(mid > n){
            right = mid;
            // console.log("right", mid);
        }
        console.log(left, mid, right, n)
        if(Math.abs(right-mid)<=1 && (left===mid)) break;
    }
    console.log("mid", mid);
    
    for(i=mid; i>=0;i--){
        console.log(Math.floor(x/2**i),Math.floor(y/2**i));
        if(Math.floor(x/2**i)!==Math.floor(y/2**i)){ 
            count += 1; 
        }
        x = x - 2**i < 0 ? x : x - 2**i;
        y = y - 2**i < 0 ? y : y - 2**i;
    }
    return count;
};